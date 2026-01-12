function toKebabCase(input) {
    const words = input.toLowerCase().split(/\s+/);
    return words.join('-');
}