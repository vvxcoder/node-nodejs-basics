import * as fs from 'fs/promises';

/**
 * implement function that deletes file fileToRemove.txt
 * (if there's no file fileToRemove.txt Error with message
 * FS operation failed must be thrown)
 */
export const remove = async () => {
    // Write your code here 

    try {
        await fs.stat(process.cwd() + "/src/fs/files/fileToRemove.txt");
    } catch (error) {
        throw new Error("FS operation failed must be thrown");
        return;
    }

    try {
        await fs.rm(process.cwd() + "/src/fs/files/fileToRemove.txt");
    } catch (error) {
        console.log(error);
    }
};
