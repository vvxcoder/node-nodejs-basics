import * as fs from 'fs/promises';

/**
 * implement function that prints all array of filenames from files folder into console
 * (if files folder doesn't exists Error with message FS operation failed must be thrown)
 */
export const list = async () => {
    // Write your code here 

    try {
        await fs.stat(process.cwd() + "/src/fs/files/");
    } catch (error) {
        throw new Error("FS operation failed must be thrown");
        return;
    }

    try {
        const res = await fs.readdir(process.cwd() + "/src/fs/files/");

        for (const item of res) {
            console.log(item);
        }
    } catch (error) {
        console.log(error);
    }
};