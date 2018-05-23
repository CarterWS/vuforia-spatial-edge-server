var realityEditor = realityEditor || {
    gui: {
        ar: {
            moveabilityOverlay: {}
        }
    },
    network: {},
    draw: {},
    touchEvents: {},
    utilities: {}
};

/**
 * @desc This function generates all required namespaces and initializes a namespace if not existing.
 * Additional it includes pointers to each subspace.
 *
 * Inspired by code examples from:
 * https://www.kenneth-truyers.net/2013/04/27/javascript-namespaces-and-modules/
 *
 * @param namespace string of the full namespace path
 * @return object that presents the actual used namespace
 **/
var createNameSpace = createNameSpace || function (namespace) {
    var splitNameSpace = namespace.split("."), object = this, object2;
    for (var i = 0; i < splitNameSpace.length; i++) {
        object = object[splitNameSpace[i]] = object[splitNameSpace[i]] || {};
        object2 = this;
        for (var e = 0; e < i; e++) {
            object2 = object2[splitNameSpace[e]];
            object[splitNameSpace[e]] = object[splitNameSpace[e]] || object2;
            object.cout = this.cout;
        }
    }
    return object;
};

createNameSpace("realityEditor");