import * as fs from 'fs/promises';

/**
 * implement function that parses environment variables with prefix
 * RSS_ and prints them to the console in the format
 * RSS_name1=value1; RSS_name2=value2
 * call RSS_name1=33 RSS_name2=66 node src/cli/env.js
 */
export const parseEnv = () => {
    // Write your code here 
    console.log(`RSS_name1=${process.env.RSS_name1}; RSS_name2=${process.env.RSS_name2}`);
};