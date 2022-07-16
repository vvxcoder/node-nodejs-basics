import * as fs from 'fs/promises';

/**
 * implement function that copies folder files with all its
 * content into folder files_copy at the same level (if files
 * folder doesn't exists or files_copy has already been created
 * Error with message FS operation failed must be thrown)
 */
export const copy = async () => {
    // Write your code here 

    try {
        await fs.stat(process.cwd() + "/src/fs/files_copy/");
        throw new Error("FS operation failed must be thrown");
    } catch (error) {
        console.log(error);
    }

    try {
        await fs.cp(process.cwd() + "/src/fs/files/", process.cwd() + "/src/fs/files_copy/", { recursive: true });
    } catch (error) {
        console.log(error);
    }
};
