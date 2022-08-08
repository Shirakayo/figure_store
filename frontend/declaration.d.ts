declare module '*.scss';
declare module '*.png'
declare module 'lodash.debounce'

declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
}