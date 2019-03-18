
if( typeof window === 'undefined' || typeof navigator === 'undefined' || navigator.userAgent.indexOf('Node.js') !== -1 || navigator.userAgent.indexOf('jsdom') !== -1) {
    var Velocity = function() {};
    Velocity.Utilities = {};
    Velocity.Utilities.removeData = function() {};
    Velocity.velocityVueServerShim = true;
    module.exports = Velocity;
} else {
    var g = window.jQuery || window.Zepto || window;

    module.exports = g.Velocity ? g.Velocity : require('velocity-animate');
}