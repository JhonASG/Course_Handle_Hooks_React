module.exports = {
    presets: [
        [ '@babel/preset-env', { target: { esmodules: true } }],
        [ '@babel/preset-react', { runtime: 'automatic' }]
    ],
};