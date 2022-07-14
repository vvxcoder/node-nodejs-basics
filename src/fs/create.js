import * as fs from 'fs/promises';

/**
 * implement function that creates new file fresh.txt with content I am fresh
 * and young inside of the files folder (if file already exists Error with
 * message FS operation failed must be thrown)
 */
export const create = async () => {
    // Write your code here 
    const text = "I am fresh and young";

    try {
        await fs.stat(process.cwd() + "/src/fs/files/fresh.txt");
        console.log("FS operation failed must be thrown");
    } catch (error) {
        console.log(error);
    }

    try {
        await fs.writeFile(process.cwd() + "/src/fs/files/fresh.txt", text);
    } catch (error) {
        console.log(error);
    }
};
