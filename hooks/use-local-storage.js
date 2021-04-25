const useLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        return localStorage[key];
    }
    console.log('hello');
    return 'EN';
};
