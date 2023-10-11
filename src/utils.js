import * as path from 'node:path';
import { spawn } from 'node:child_process';
import { dialog } from '@electron/remote';
import fse from 'fs-extra';
import Seven from 'node-7z';

// Path of the resources dir of Electron, contains .asar file, VSCodium, startup json
const resourcesPath = (
  process.env.NODE_ENV === 'development'
    ? path.join(process.cwd(), 'resources')
    : process.resourcesPath // process.resourcesPath should be more robust in non-development
);

// Use codium.cmd for win32
// TODO: Support external VSC?
const codium = process.platform === 'win32' ? 'codium.cmd' : 'codium';

const paths = {
  resources: resourcesPath,
  startupJson:   path.join(resourcesPath, 'mips-studio-startup-json.json'),
  VSC:           path.join(resourcesPath, 'vscodium', 'bin', codium),
  eideTemplates: path.join(resourcesPath, 'eide-templates'),
};

// Freeze & check paths
Object.freeze(paths);
for (const [key, value] of Object.entries(paths)) {
  if (!fse.existsSync(value)) {
    throw new Error(`${key} path "${value}" doesn't exist!`);
  }
}

/** @returns {any} */
const readStartupJson = () => fse.readJsonSync(paths.startupJson, { encoding: 'utf8' });

/** When getting only one dir from dialog.showOpenDialogSync(),
 * return dir | undefined, instead of [dir] | undefined.
 * @returns {string | undefined} */
const newFolderDialog = () => {
  const dirs = dialog.showOpenDialogSync({ properties: ['openDirectory'] });
  return (
    Array.isArray(dirs) && dirs[0]
    ? dirs[0]
    : undefined
  );
};

/** open a dir / code-workspace in VSC
 * @param {string} projectPath */
const openWithVSC = projectPath => {
  if (fse.existsSync(projectPath)) {
    spawn(paths.VSC, [projectPath], { detached: true });
  } else {
    // TODO: handle this error?
    console.error(`${projectPath} does not exist`);
  }
};

/** Extract & open EIDE ept template in VSC
 * @param {string} templateName
 * @param {string} parentDir
 * @param {string} projectName
 * @param {string} workspaceName */
const extractTemplate = (templateName, parentDir, projectName, workspaceName) => {
  const ept = path.join(paths.eideTemplates, `${templateName}.ept`);
  const projectDir = path.join(parentDir, projectName);
  const seven = Seven.extractFull(ept, projectDir);
  seven.on('error', err => console.error(err));
  seven.on('end', () => openWithVSC(path.join(projectDir, workspaceName)));
};

export { readStartupJson, newFolderDialog, openWithVSC, extractTemplate };
