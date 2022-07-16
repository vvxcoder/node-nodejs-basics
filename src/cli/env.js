import * as fs from 'fs/promises';

/**
 * implement function that parses environment variables with prefix
 * RSS_ and prints them to the console in the format
 * RSS_name1=value1; RSS_name2=value2
 */
const parseEnv = () => {
    // Write your code here 
    console.log(process.env);
};

parseEnv();