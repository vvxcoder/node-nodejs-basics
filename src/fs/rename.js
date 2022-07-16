import * as fs from 'fs/promises';
/**
 * implement function that renames file wrongFilename.txt to properFilename with
 * extension .md (if there's no file wrongFilename.txt or properFilename.md
 * already exists Error with message FS operation failed must be thrown)
 */
export const rename = async () => {
    // Write your code here 
    try {
        await fs.stat(process.cwd() + "/src/fs/files/wrongFilename.txt");
    } catch (error) {
        throw new Error("FS operation failed must be thrown");
    }
    try {
        await fs.stat(process.cwd() + "/src/fs/files/properFilename.md");
        throw new Error("FS operation failed must be thrown");
    } catch (error) {
        //
    }

    try {
        await fs.rename(process.cwd() + "/src/fs/files/wrongFilename.txt", process.cwd() + "/src/fs/files/properFilename.md");
    } catch (error) {
        console.log(error);
    }
};
