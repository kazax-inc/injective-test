import { readFile } from 'fs/promises';
import path from 'path';

const printDep = async () => {
  try {
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
    const packageData = await readFile(packageJsonPath, 'utf-8');
    const { dependencies = {}} = JSON.parse(packageData);

    console.log('Dependencies:');
    Object.entries(dependencies).forEach(([pkg, version]) => {
      console.log(`- ${pkg}: ${version}\n`);
    });
  } catch (error) {
    console.error('Error reading package.json:', error.message);
  }
}

printDep();