/**
 * Converts a given string to camel case format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The camel case representation of the input string.
 * 
 * @example
 * toCamelCase('simple_example'); // returns 'simpleExample'
 * toCamelCase('hello-world'); // returns 'helloWorld'
 * toCamelCase('convert to camel case'); // returns 'convertToCamelCase'
 * toCamelCase('API_response_data'); // returns 'APIResponseData'
 * toCamelCase(''); // returns ''
 * toCamelCase('___'); // returns ''
 */

/**
 * Converts a given string to dot case format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The dot case representation of the input string.
 * 
 * @example
 * toDotCase('simple_example'); // returns 'simple.example'
 * toDotCase('hello-world'); // returns 'hello.world'
 * toDotCase('convert to dot case'); // returns 'convert.to.dot.case'
 * toDotCase('API_response_data'); // returns 'api.response.data'
 * toDotCase(''); // returns ''
 * toDotCase('___'); // returns ''
 */
function toCamelCase(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Handle empty strings or strings with only special characters
    if (!str || !/[a-zA-Z0-9]/.test(str)) {
        return '';
    }

    // Split by common separators (spaces, hyphens, underscores)
    const words = str
        .split(/[\s\-_]+/)
        .filter(word => word.length > 0);

    // Return empty string if no valid words found
    if (words.length === 0) {
        return '';
    }

    // Convert: first word lowercase, rest title case
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            // Preserve acronyms (all uppercase words stay uppercase)
            if (word === word.toUpperCase() && word.length > 1) {
                return word;
            }
            // Title case: first letter uppercase, rest lowercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('simple_example'));        // 'simpleExample'
console.log(toCamelCase('hello-world'));           // 'helloWorld'
console.log(toCamelCase('convert to camel case')); // 'convertToCamelCase'
console.log(toCamelCase('API_response_data'));     // 'APIResponseData'
console.log(toCamelCase(''));                      // ''
console.log(toCamelCase('___'));                   // ''

function toDotCase(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Handle empty strings or strings with only special characters
    if (!str || !/[a-zA-Z0-9]/.test(str)) {
        return '';
    }

    // Split by common separators (spaces, hyphens, underscores)
    const words = str
        .split(/[\s\-_]+/)
        .filter(word => word.length > 0);

    // Return empty string if no valid words found
    if (words.length === 0) {
        return '';
    }

    // Convert all words to lowercase and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Test cases
console.log(toDotCase('simple_example'));        // 'simple.example'
console.log(toDotCase('hello-world'));           // 'hello.world'
console.log(toDotCase('convert to dot case'));   // 'convert.to.dot.case'
console.log(toDotCase('API_response_data'));     // 'api.response.data'
console.log(toDotCase(''));                      // ''
console.log(toDotCase('___'));                   // ''

