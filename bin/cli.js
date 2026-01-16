#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  title: (msg) => console.log(`\n${colors.bright}${colors.magenta}${msg}${colors.reset}\n`),
};

// Package info
const packageDir = path.dirname(__dirname);
const workflowsSourceDir = path.join(packageDir, 'workflows');

// Get all available workflows
function getAvailableWorkflows() {
  try {
    const files = fs.readdirSync(workflowsSourceDir);
    return files.filter(f => f.endsWith('.md'));
  } catch (error) {
    log.error(`Không thể đọc thư mục workflows: ${error.message}`);
    return [];
  }
}

// Parse command line arguments
function parseArgs(args) {
  const options = {
    command: args[0] || 'help',
    force: false,
    only: null,
    targetDir: process.cwd(),
  };

  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--force' || arg === '-f') {
      options.force = true;
    } else if (arg.startsWith('--only=')) {
      options.only = arg.replace('--only=', '').split(',');
    } else if (arg.startsWith('--dir=')) {
      options.targetDir = arg.replace('--dir=', '');
    }
  }

  return options;
}

// Init command - copy workflows to target directory
function initWorkflows(options) {
  const targetDir = path.join(options.targetDir, '.agent', 'workflows');
  
  log.title('🚀 Antigravity Workflows - Init');
  log.info(`Target directory: ${targetDir}`);

  // Create target directory if not exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    log.success('Đã tạo thư mục .agent/workflows/');
  }

  // Get workflows to copy
  let workflowsToCopy = getAvailableWorkflows();
  
  if (options.only) {
    workflowsToCopy = workflowsToCopy.filter(w => {
      const name = w.replace('.md', '');
      return options.only.includes(name);
    });
  }

  if (workflowsToCopy.length === 0) {
    log.warning('Không có workflow nào để copy!');
    return;
  }

  // Copy each workflow
  let copied = 0;
  let skipped = 0;

  workflowsToCopy.forEach(workflow => {
    const source = path.join(workflowsSourceDir, workflow);
    const target = path.join(targetDir, workflow);

    if (fs.existsSync(target) && !options.force) {
      log.warning(`Bỏ qua ${workflow} (đã tồn tại, dùng --force để ghi đè)`);
      skipped++;
      return;
    }

    try {
      fs.copyFileSync(source, target);
      log.success(`Đã copy ${workflow}`);
      copied++;
    } catch (error) {
      log.error(`Không thể copy ${workflow}: ${error.message}`);
    }
  });

  // Copy workflow-guide.html
  try {
    const guideSource = path.join(packageDir, 'workflow-guide.html');
    const guideTarget = path.join(targetDir, 'workflow-guide.html');
    
    if (fs.existsSync(guideSource)) {
        fs.copyFileSync(guideSource, guideTarget);
        log.success('Đã cài đặt workflow-guide.html');
    }
  } catch (error) {
    log.warning(`Không thể copy guide: ${error.message}`);
  }

  // Summary
  console.log('');
  log.info(`Tổng kết: ${colors.green}${copied} đã copy${colors.reset}, ${colors.yellow}${skipped} bỏ qua${colors.reset}`);
  
  if (copied > 0) {
    console.log('');
    log.title('📖 Hướng dẫn sử dụng');
    console.log('  Trong Antigravity IDE, sử dụng các slash commands:');
    console.log(`  ${colors.cyan}/plan${colors.reset}   - Lập kế hoạch triển khai`);
    console.log(`  ${colors.cyan}/cook${colors.reset}   - Triển khai tính năng đầy đủ`);
    console.log(`  ${colors.cyan}/fix${colors.reset}    - Sửa lỗi nhanh`);
    console.log(`  ${colors.cyan}/debug${colors.reset}  - Phân tích vấn đề`);
    console.log(`  ${colors.cyan}/review${colors.reset} - Review code`);
    console.log('');
    console.log(`  Mở file hướng dẫn: ${colors.green}.agent/workflows/workflow-guide.html${colors.blue} (Double click để mở trong trình duyệt)${colors.reset}`);
    console.log(`  Xem thêm: ${colors.dim}.agent/workflows/README.md${colors.reset}`);
  }
}

// List command - show available workflows
function listWorkflows() {
  log.title('📋 Danh sách Workflows có sẵn');

  const workflows = getAvailableWorkflows();
  
  workflows.forEach(w => {
    const name = w.replace('.md', '');
    const source = path.join(workflowsSourceDir, w);
    
    try {
      const content = fs.readFileSync(source, 'utf8');
      const descMatch = content.match(/description:\s*(.+)/);
      const desc = descMatch ? descMatch[1] : 'Không có mô tả';
      
      console.log(`  ${colors.cyan}/${name}${colors.reset}`);
      console.log(`    ${colors.dim}${desc}${colors.reset}`);
    } catch (error) {
      console.log(`  ${colors.cyan}/${name}${colors.reset}`);
    }
  });

  console.log('');
  log.info(`Tổng cộng: ${workflows.length} workflows`);
}

// Update command - update existing workflows
function updateWorkflows(options) {
  options.force = true;
  log.title('🔄 Antigravity Workflows - Update');
  initWorkflows(options);
}

// Remove command - remove workflows from project
function removeWorkflows(options) {
  const targetDir = path.join(options.targetDir, '.agent', 'workflows');
  
  log.title('🗑️  Antigravity Workflows - Remove');

  if (!fs.existsSync(targetDir)) {
    log.warning('Thư mục .agent/workflows/ không tồn tại!');
    return;
  }

  const workflows = getAvailableWorkflows();
  let removed = 0;

  workflows.forEach(workflow => {
    const target = path.join(targetDir, workflow);
    
    if (fs.existsSync(target)) {
      try {
        fs.unlinkSync(target);
        log.success(`Đã xóa ${workflow}`);
        removed++;
      } catch (error) {
        log.error(`Không thể xóa ${workflow}: ${error.message}`);
      }
    }
  });

  log.info(`Đã xóa ${removed} workflows`);
}

// Help command
function showHelp() {
  console.log(`
${colors.bright}${colors.magenta}🚀 Antigravity Workflows${colors.reset}
${colors.dim}Bộ workflows tự động hóa cho Antigravity IDE${colors.reset}

${colors.bright}Usage:${colors.reset}
  npx @pipyl/antigravity-workflows <command> [options]

${colors.bright}Commands:${colors.reset}
  ${colors.cyan}init${colors.reset}      Cài đặt workflows vào project hiện tại
  ${colors.cyan}list${colors.reset}      Xem danh sách workflows có sẵn
  ${colors.cyan}update${colors.reset}    Cập nhật workflows (ghi đè tất cả)
  ${colors.cyan}remove${colors.reset}    Xóa workflows khỏi project
  ${colors.cyan}help${colors.reset}      Hiển thị trợ giúp này

${colors.bright}Options:${colors.reset}
  ${colors.yellow}--force, -f${colors.reset}     Ghi đè workflows đã tồn tại
  ${colors.yellow}--only=a,b,c${colors.reset}    Chỉ cài đặt các workflows cụ thể
  ${colors.yellow}--dir=path${colors.reset}      Thư mục đích (mặc định: thư mục hiện tại)

${colors.bright}Examples:${colors.reset}
  npx @pipyl/antigravity-workflows init
  npx @pipyl/antigravity-workflows init --force
  npx @pipyl/antigravity-workflows init --only=cook,plan,fix
  npx @pipyl/antigravity-workflows list
  npx @pipyl/antigravity-workflows update

${colors.dim}Docs: https://github.com/aidevflydino/@pipyl/antigravity-workflows${colors.reset}
`);
}

// Main
function main() {
  const args = process.argv.slice(2);
  const options = parseArgs(args);

  switch (options.command) {
    case 'init':
      initWorkflows(options);
      break;
    case 'list':
      listWorkflows();
      break;
    case 'update':
      updateWorkflows(options);
      break;
    case 'remove':
      removeWorkflows(options);
      break;
    case 'help':
    case '--help':
    case '-h':
    default:
      showHelp();
      break;
  }
}

main();
