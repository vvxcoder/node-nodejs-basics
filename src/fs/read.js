import * as fs from 'fs/promises';

/**
 * implement function that prints content of the fileToRead.txt into
 * console (if there's no file fileToRead.txt Error with message FS
 * operation failed must be thrown)
 */
export const read = async () => {
    // Write your code here 

    try {
        await fs.stat(process.cwd() + "/src/fs/files/fileToRead.txt");
    } catch (error) {
        throw new Error("FS operation failed must be thrown");
        return;
    }

    try {
        const res = await fs.readFile(process.cwd() + "/src/fs/files/fileToRead.txt", "utf8");
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};