const COMMANDS = {};

function registerCommand(name, def) {
    COMMANDS[name] = def;
}

// ============ MATH COMMANDS ============
registerCommand('algebra', {
    description: 'Display all algebra formulas',
    usage: 'algebra [subcategory]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Algebra Formulas ===' });
        let sub = args[0] && args[0].toLowerCase();
        let data = MATH.categories.algebra;
        sub = null;
        let cat = MATH.categories.algebra;
        for (let s in cat.subcategories) {
            if (args[0] && args[0].toLowerCase() === s) {
                sub = s; break;
            }
        }
        if (sub && cat.subcategories[sub]) {
            let sc = cat.subcategories[sub];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s in cat.subcategories) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 5)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 5) {
                    output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-5) + ' more. Use "algebra ' + s + '" to see all.' });
                }
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('geometry', {
    description: 'Display all geometry formulas',
    usage: 'geometry [subcategory]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Geometry Formulas ===' });
        let cat = MATH.categories.geometry;
        let requestedSub = args[0] && Object.keys(cat.subcategories).find(k => k.startsWith(args[0].toLowerCase()) || args[0].toLowerCase() === k);
        if (requestedSub && cat.subcategories[requestedSub]) {
            let sc = cat.subcategories[requestedSub];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s in cat.subcategories) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 5)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 5) {
                    output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-5) + ' more. Use "geometry ' + s + '" to see all.' });
                }
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('calculus', {
    description: 'Display calculus formulas (limits, derivatives, integrals)',
    usage: 'calculus [limits|derivatives|integrals|multivariable|series]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Calculus Formulas ===' });
        let cat = MATH.categories.calculus;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name });
                output.push({ type: 'highlight', text: '  ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 4)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 4) {
                    output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-4) + ' more.' });
                }
            }
        }
        return output;
    }
});

registerCommand('trig', {
    description: 'Display all trigonometry formulas',
    usage: 'trig',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Trigonometry Formulas ===' });
        let sc = MATH.categories.geometry.subcategories.trig;
        output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
        for (let f of sc.formulas) {
            output.push({ type: 'formula', text: f.name });
            output.push({ type: 'highlight', text: '  ' + f.expression });
            output.push({ type: 'dim', text: '  ' + f.description });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('linear-algebra', {
    description: 'Display linear algebra formulas',
    usage: 'linear-algebra [matrix|vectors]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Linear Algebra Formulas ===' });
        let cat = MATH.categories.linear_algebra;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 5)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 5) output.push({ type: 'dim', text: '  ... and more.' });
            }
        }
        return output;
    }
});

registerCommand('number-theory', {
    description: 'Display number theory formulas',
    usage: 'number-theory',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Number Theory Formulas ===' });
        let cat = MATH.categories.number_theory;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) {
                output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            }
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('probability', {
    description: 'Display probability and statistics formulas',
    usage: 'probability [prob|distributions|stats]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Probability & Statistics Formulas ===' });
        let cat = MATH.categories.probability;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 4)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 4) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-4) + ' more.' });
            }
        }
        return output;
    }
});

registerCommand('set-theory', {
    description: 'Display set theory and logic formulas',
    usage: 'set-theory',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Set Theory & Logic Formulas ===' });
        let cat = MATH.categories.set_theory;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('combinatorics', {
    description: 'Display combinatorics formulas',
    usage: 'combinatorics',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Combinatorics Formulas ===' });
        let cat = MATH.categories.combinatorics;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('topology', {
    description: 'Display topology formulas',
    usage: 'topology',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Topology Formulas ===' });
        let cat = MATH.categories.topology;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('differential-equations', {
    description: 'Display differential equations formulas',
    usage: 'diff-eq [ode|pde]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Differential Equations Formulas ===' });
        let cat = MATH.categories.differential_eq;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 4)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 4) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-4) + ' more.' });
            }
        }
        return output;
    }
});

registerCommand('measure-theory', {
    description: 'Display measure theory and functional analysis formulas',
    usage: 'measure-theory',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Measure Theory & Functional Analysis Formulas ===' });
        let cat = MATH.categories.measure_theory;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('tensors', {
    description: 'Display tensor calculus and differential geometry formulas',
    usage: 'tensors',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Tensor Calculus & Differential Geometry Formulas ===' });
        let cat = MATH.categories.tensors;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('optimization', {
    description: 'Display optimization formulas',
    usage: 'optimization',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Optimization Formulas ===' });
        let cat = MATH.categories.optimization;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('discrete', {
    description: 'Display discrete mathematics formulas',
    usage: 'discrete',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Discrete Mathematics Formulas ===' });
        let cat = MATH.categories.discrete;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('all-math', {
    description: 'List all mathematical formulas (may be large)',
    usage: 'all-math',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== ALL MATHEMATICAL FORMULAS ===' });
        output.push({ type: 'info', text: 'Total formula count: ' + MATH.getCount() });
        output.push({ type: 'system', text: '' });
        for (let cat in MATH.categories) {
            for (let s in MATH.categories[cat].subcategories) {
                let sc = MATH.categories[cat].subcategories[s];
                output.push({ type: 'subheading', text: '[' + MATH.categories[cat].name + '] ' + sc.name });
                for (let f of sc.formulas) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

// ============ PHYSICS COMMANDS ============
registerCommand('mechanics', {
    description: 'Display classical mechanics formulas',
    usage: 'mechanics [kinematics|dynamics|work_energy|rotational|gravity|oscillations]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Classical Mechanics Formulas ===' });
        let cat = PHYSICS.categories.mechanics;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 5)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 5) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-5) + ' more.' });
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('thermo', {
    description: 'Display thermodynamics and statistical mechanics formulas',
    usage: 'thermo [thermo|statistical]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Thermodynamics & Statistical Mechanics Formulas ===' });
        let cat = PHYSICS.categories.thermodynamics;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 5)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 5) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-5) + ' more.' });
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('electromag', {
    description: 'Display electromagnetism formulas',
    usage: 'electromag [electrostatics|current|magnetism|induction|em_waves]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Electromagnetism Formulas ===' });
        let cat = PHYSICS.categories.electromagnetism;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 4)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 4) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-4) + ' more.' });
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('optics', {
    description: 'Display optics formulas',
    usage: 'optics [geometric|wave_optics]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Optics Formulas ===' });
        let cat = PHYSICS.categories.optics;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 5)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 5) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-5) + ' more.' });
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('quantum', {
    description: 'Display quantum mechanics formulas',
    usage: 'quantum [foundations|angular_momentum|atomic|advanced_qm]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Quantum Mechanics Formulas ===' });
        let cat = PHYSICS.categories.quantum;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 4)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 4) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-4) + ' more.' });
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('relativity', {
    description: 'Display relativity formulas (special and general)',
    usage: 'relativity [special|general]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Relativity Formulas ===' });
        let cat = PHYSICS.categories.relativity;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 4)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 4) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-4) + ' more.' });
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('nuclear', {
    description: 'Display nuclear and particle physics formulas',
    usage: 'nuclear [nuclear|particle]',
    handler: function(args) {
        let output = [];
        output.push({ type: 'heading', text: '=== Nuclear & Particle Physics Formulas ===' });
        let cat = PHYSICS.categories.nuclear;
        let subs = Object.keys(cat.subcategories);
        let requested = args[0] && subs.find(s => s.startsWith(args[0].toLowerCase()));
        if (requested) {
            let sc = cat.subcategories[requested];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                output.push({ type: 'dim', text: '  ' + f.description });
                output.push({ type: 'system', text: '' });
            }
        } else {
            for (let s of subs) {
                let sc = cat.subcategories[s];
                output.push({ type: 'subheading', text: sc.name + ' [' + s + '] (' + sc.formulas.length + ' formulas)' });
                for (let f of sc.formulas.slice(0, 4)) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                if (sc.formulas.length > 4) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-4) + ' more.' });
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

registerCommand('fluid-mechanics', {
    description: 'Display fluid mechanics formulas',
    usage: 'fluid-mechanics',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Fluid Mechanics Formulas ===' });
        let cat = PHYSICS.categories.fluid_mechanics;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('solid-state', {
    description: 'Display solid state physics formulas',
    usage: 'solid-state',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Solid State Physics Formulas ===' });
        let cat = PHYSICS.categories.solid_state;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('astrophysics', {
    description: 'Display astrophysics and cosmology formulas',
    usage: 'astrophysics',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Astrophysics & Cosmology Formulas ===' });
        let cat = PHYSICS.categories.astrophysics;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 5)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 5) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-5) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('acoustics', {
    description: 'Display acoustics formulas',
    usage: 'acoustics',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Acoustics Formulas ===' });
        let cat = PHYSICS.categories.acoustics;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('plasma', {
    description: 'Display plasma physics formulas',
    usage: 'plasma',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== Plasma Physics Formulas ===' });
        let cat = PHYSICS.categories.plasma;
        for (let s in cat.subcategories) {
            let sc = cat.subcategories[s];
            output.push({ type: 'subheading', text: sc.name + ' (' + sc.formulas.length + ' formulas)' });
            for (let f of sc.formulas.slice(0, 6)) {
                output.push({ type: 'formula', text: f.name + ': ' + f.expression });
            }
            if (sc.formulas.length > 6) output.push({ type: 'dim', text: '  ... and ' + (sc.formulas.length-6) + ' more.' });
            output.push({ type: 'system', text: '' });
        }
        return output;
    }
});

registerCommand('all-physics', {
    description: 'List all physics formulas',
    usage: 'all-physics',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: '=== ALL PHYSICS FORMULAS ===' });
        output.push({ type: 'info', text: 'Total formula count: ' + PHYSICS.getCount() });
        output.push({ type: 'system', text: '' });
        for (let cat in PHYSICS.categories) {
            for (let s in PHYSICS.categories[cat].subcategories) {
                let sc = PHYSICS.categories[cat].subcategories[s];
                output.push({ type: 'subheading', text: '[' + PHYSICS.categories[cat].name + '] ' + sc.name });
                for (let f of sc.formulas) {
                    output.push({ type: 'formula', text: f.name + ': ' + f.expression });
                }
                output.push({ type: 'system', text: '' });
            }
        }
        return output;
    }
});

// ============ SYSTEM COMMANDS ============

registerCommand('help', {
    description: 'Display help information',
    usage: 'help [command]',
    handler: function(args) {
        if (args[0]) {
            let cmd = args[0].toLowerCase();
            if (COMMANDS[cmd]) {
                let output = [];
                output.push({ type: 'heading', text: 'Command: ' + cmd });
                output.push({ type: 'info', text: 'Description: ' + COMMANDS[cmd].description });
                output.push({ type: 'info', text: 'Usage: ' + COMMANDS[cmd].usage });
                return output;
            }
            return [{ type: 'error', text: 'help: no such command "' + cmd + '"' }];
        }
        let output = [];
        output.push({ type: 'heading', text: 'MathPhys WebOS v4.2.0 - Available Commands' });
        output.push({ type: 'system', text: 'Type "help [command]" for detailed info about a command.' });
        output.push({ type: 'system', text: '' });

        output.push({ type: 'subheading', text: '--- Mathematics Formula Commands ---' });
        let mathCmds = ['algebra', 'geometry', 'calculus', 'trig', 'linear-algebra', 'number-theory', 'probability', 'set-theory', 'combinatorics', 'topology', 'differential-equations', 'measure-theory', 'tensors', 'optimization', 'discrete', 'all-math'];
        for (let c of mathCmds) {
            if (COMMANDS[c]) output.push({ type: 'info', text: c.padEnd(28) + COMMANDS[c].description });
        }
        output.push({ type: 'system', text: '' });
        output.push({ type: 'subheading', text: '--- Physics Formula Commands ---' });
        let physCmds = ['mechanics', 'thermo', 'electromag', 'optics', 'quantum', 'relativity', 'nuclear', 'fluid-mechanics', 'solid-state', 'astrophysics', 'acoustics', 'plasma', 'all-physics'];
        for (let c of physCmds) {
            if (COMMANDS[c]) output.push({ type: 'info', text: c.padEnd(28) + COMMANDS[c].description });
        }
        output.push({ type: 'system', text: '' });
        output.push({ type: 'subheading', text: '--- System Commands ---' });
        let sysCmds = ['help', 'clear', 'ls', 'cd', 'pwd', 'cat', 'echo', 'date', 'whoami', 'neofetch', 'shutdown', 'reboot', 'search', 'formulas', 'man', 'tree', 'mkdir', 'touch', 'rm', 'cp', 'mv', 'df', 'uptime', 'uname', 'history', 'grep', 'top', 'ps', 'su', 'chmod', 'which', 'wc', 'head', 'tail', 'sort', 'export', 'alias', 'calc', 'convert', 'constants', 'units', 'timer', 'clock'];
        for (let c of sysCmds) {
            if (COMMANDS[c]) output.push({ type: 'info', text: c.padEnd(28) + COMMANDS[c].description });
        }
        output.push({ type: 'system', text: '' });
        output.push({ type: 'dim', text: 'Total commands: ' + Object.keys(COMMANDS).length + ' | Total math formulas: ' + MATH.getCount() + ' | Total physics formulas: ' + PHYSICS.getCount() });
        return output;
    }
});

registerCommand('clear', {
    description: 'Clear the terminal screen',
    usage: 'clear',
    handler: function() {
        return { type: 'clear' };
    }
});

registerCommand('ls', {
    description: 'List directory contents',
    usage: 'ls [-la] [path]',
    handler: function(args) {
        let showAll = args.includes('-a') || args.includes('-la') || args.includes('-al');
        let showLong = args.includes('-l') || args.includes('-la') || args.includes('-al');
        let pathArg = args.filter(a => !a.startsWith('-'))[0];

        try {
            let items = FS.ls(pathArg);
            let output = [];
            for (let item of items) {
                if (!showAll && item.name.startsWith('.')) continue;
                if (showLong) {
                    let perms = item.permissions || (item.type === 'dir' ? 'drwxr-xr-x' : '-rw-r--r--');
                    let size = item.type === 'file' ? (item.content ? item.content.length : 0) : 4096;
                    let date = item.modified ? new Date(item.modified).toLocaleString() : '---';
                    output.push({ type: 'info', text: perms + ' ' + String(size).padStart(8) + ' ' + date + ' ' + item.name });
                } else {
                    let color = item.type === 'dir' ? '#00ff88' : '#00ccff';
                    output.push({ type: 'info', text: item.name, color: color });
                }
            }
            return output;
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('cd', {
    description: 'Change current working directory',
    usage: 'cd [path]',
    handler: function(args) {
        let path = args[0] || '/';
        try {
            let newPath = FS.cd(path);
            return [{ type: 'system', text: '' }];
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    },
    changeDir: true
});

registerCommand('pwd', {
    description: 'Print current working directory',
    usage: 'pwd',
    handler: function() {
        return [{ type: 'info', text: FS.currentPath }];
    }
});

registerCommand('cat', {
    description: 'Display file contents',
    usage: 'cat [file]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'cat: missing operand' }];
        try {
            let content = FS.readFile(args[0]);
            let lines = content.split('\n');
            return lines.map(l => ({ type: 'info', text: l }));
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('echo', {
    description: 'Print text to terminal',
    usage: 'echo [text]',
    handler: function(args) {
        return [{ type: 'info', text: args.join(' ') }];
    }
});

registerCommand('date', {
    description: 'Display current date and time',
    usage: 'date',
    handler: function() {
        return [{ type: 'info', text: new Date().toString() }];
    }
});

registerCommand('whoami', {
    description: 'Display current username',
    usage: 'whoami',
    handler: function() {
        return [{ type: 'info', text: 'root' }];
    }
});

registerCommand('neofetch', {
    description: 'Display system information',
    usage: 'neofetch',
    handler: function() {
        let output = [];
        output.push({ type: 'system', text: '' });
        output.push({
            type: 'info',
            text: '       .---.           root@mathphys-os' +
                  '\n      /     \\          -----------------' +
                  '\n     /       \\         OS: MathPhys WebOS v4.2.0' +
                  '\n    |  O   O  |        Kernel: MP-Kernel 4.2.0' +
                  '\n    |    _    |        Uptime: ' + Math.floor(Date.now()/1000) + 's' +
                  '\n     \\  ===  /         Shell: MP-Shell v2.1' +
                  '\n      \\_____/          Terminal: Web-Terminal' +
                  '\n                       CPU: Math Formula Processor x64' +
                  '\n                       RAM: ~200K Formulas Loaded' +
                  '\n                       Math Formulas: ' + MATH.getCount() +
                  '\n                       Physics Formulas: ' + PHYSICS.getCount() +
                  '\n                       Resolution: ' + window.innerWidth + 'x' + window.innerHeight
        });
        output.push({ type: 'system', text: '' });
        return output;
    }
});

registerCommand('shutdown', {
    description: 'Shutdown the system',
    usage: 'shutdown',
    handler: function() {
        return [
            { type: 'warning', text: 'System shutting down...' },
            { type: 'warning', text: 'Goodbye!' },
            { type: 'shutdown' }
        ];
    }
});

registerCommand('reboot', {
    description: 'Reboot the system',
    usage: 'reboot',
    handler: function() {
        return [
            { type: 'warning', text: 'System rebooting...' },
            { type: 'reboot' }
        ];
    }
});

registerCommand('search', {
    description: 'Search across all formulas in math and physics',
    usage: 'search [query]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'search: missing query' }];
        let query = args.join(' ');

        let mathResults = MATH.search(query);
        let physicsResults = PHYSICS.search(query);

        let output = [];
        output.push({ type: 'heading', text: 'Search Results for: "' + query + '"' });
        output.push({ type: 'info', text: 'Found ' + (mathResults.length + physicsResults.length) + ' matching formulas.' });
        output.push({ type: 'system', text: '' });

        if (mathResults.length > 0) {
            output.push({ type: 'subheading', text: '--- Mathematics (' + mathResults.length + ' results) ---' });
            for (let r of mathResults.slice(0, 30)) {
                output.push({ type: 'formula', text: '[' + r.category + '/' + r.subcategory + '] ' + r.name + ': ' + r.expression });
                output.push({ type: 'dim', text: '  ' + r.description });
                output.push({ type: 'system', text: '' });
            }
            if (mathResults.length > 30) {
                output.push({ type: 'dim', text: '  ... and ' + (mathResults.length-30) + ' more math results.' });
            }
        }
        if (physicsResults.length > 0) {
            output.push({ type: 'subheading', text: '--- Physics (' + physicsResults.length + ' results) ---' });
            for (let r of physicsResults.slice(0, 30)) {
                output.push({ type: 'formula', text: '[' + r.category + '/' + r.subcategory + '] ' + r.name + ': ' + r.expression });
                output.push({ type: 'dim', text: '  ' + r.description });
                output.push({ type: 'system', text: '' });
            }
            if (physicsResults.length > 30) {
                output.push({ type: 'dim', text: '  ... and ' + (physicsResults.length-30) + ' more physics results.' });
            }
        }

        if (mathResults.length + physicsResults.length === 0) {
            output.push({ type: 'warning', text: 'No formulas found matching "' + query + '".' });
        }
        return output;
    }
});

registerCommand('formulas', {
    description: 'List all formula categories with counts',
    usage: 'formulas',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: 'MathPhys WebOS - Formula Categories' });
        output.push({ type: 'system', text: 'Total math formulas: ' + MATH.getCount() + ' | Total physics formulas: ' + PHYSICS.getCount() + ' | Combined: ' + (MATH.getCount()+PHYSICS.getCount()) });
        output.push({ type: 'system', text: '' });
        output.push({ type: 'subheading', text: '--- Mathematics Formula Categories ---' });
        for (let cat in MATH.categories) {
            let subCount = 0;
            for (let s in MATH.categories[cat].subcategories) {
                subCount += MATH.categories[cat].subcategories[s].formulas.length;
            }
            output.push({ type: 'info', text: cat.padEnd(24) + ' - ' + MATH.categories[cat].description + ' [' + subCount + ' formulas]' });
        }
        output.push({ type: 'system', text: '' });
        output.push({ type: 'subheading', text: '--- Physics Formula Categories ---' });
        for (let cat in PHYSICS.categories) {
            let subCount = 0;
            for (let s in PHYSICS.categories[cat].subcategories) {
                subCount += PHYSICS.categories[cat].subcategories[s].formulas.length;
            }
            output.push({ type: 'info', text: cat.padEnd(24) + ' - ' + PHYSICS.categories[cat].description + ' [' + subCount + ' formulas]' });
        }
        return output;
    }
});

registerCommand('man', {
    description: 'Display manual page for a command',
    usage: 'man [command]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'man: missing operand' }];
        let cmd = args[0].toLowerCase();
        if (!COMMANDS[cmd]) return [{ type: 'error', text: 'man: no manual for "' + args[0] + '"' }];
        let output = [];
        output.push({ type: 'heading', text: 'MANUAL PAGE: ' + cmd });
        output.push({ type: 'system', text: 'NAME' });
        output.push({ type: 'info', text: '  ' + cmd + ' - ' + COMMANDS[cmd].description });
        output.push({ type: 'system', text: 'SYNOPSIS' });
        output.push({ type: 'info', text: '  ' + COMMANDS[cmd].usage });
        output.push({ type: 'system', text: 'DESCRIPTION' });
        output.push({ type: 'info', text: '  ' + COMMANDS[cmd].description + '. Use this command to browse formulas in the ' + cmd + ' category.' });
        output.push({ type: 'system', text: 'EXAMPLES' });
        output.push({ type: 'info', text: '  ' + cmd });
        output.push({ type: 'info', text: '  ' + cmd + ' [subcategory]' });
        output.push({ type: 'system', text: '' });
        output.push({ type: 'dim', text: '  See also: help, formulas, search' });
        return output;
    }
});

registerCommand('tree', {
    description: 'Display filesystem tree',
    usage: 'tree [path]',
    handler: function(args) {
        let path = args[0] || FS.currentPath;
        let result = FS.getTree(path);
        return [{ type: 'info', text: result.trim() }];
    }
});

registerCommand('mkdir', {
    description: 'Create directories',
    usage: 'mkdir [dirname]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'mkdir: missing operand' }];
        try {
            FS.mkdir(args[0]);
            return [{ type: 'system', text: '' }];
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('touch', {
    description: 'Create empty files',
    usage: 'touch [filename]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'touch: missing operand' }];
        try {
            FS.writeFile(args[0], '');
            return [{ type: 'system', text: '' }];
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('rm', {
    description: 'Remove files or directories',
    usage: 'rm [-rf] [path]',
    handler: function(args) {
        if (!args[0] || args[0] === '-rf' && !args[1]) return [{ type: 'error', text: 'rm: missing operand' }];
        let path = args[0] === '-rf' ? args[1] : args[0];
        let force = args[0] === '-rf';
        try {
            let r = FS.resolveNode(path);
            if (!r) throw new Error('rm: cannot remove "' + path + '": No such file or directory');
            if (r.node.type === 'dir') {
                FS.rmdir(path);
            } else {
                FS.rm(path);
            }
            return [{ type: 'system', text: '' }];
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('cp', {
    description: 'Copy files',
    usage: 'cp [source] [dest]',
    handler: function(args) {
        if (args.length < 2) return [{ type: 'error', text: 'cp: missing operands' }];
        try {
            let content = FS.readFile(args[0]);
            FS.writeFile(args[1], content);
            return [{ type: 'system', text: '' }];
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('mv', {
    description: 'Move/rename files',
    usage: 'mv [source] [dest]',
    handler: function(args) {
        if (args.length < 2) return [{ type: 'error', text: 'mv: missing operands' }];
        try {
            let content = FS.readFile(args[0]);
            FS.writeFile(args[1], content);
            FS.rm(args[0]);
            return [{ type: 'system', text: '' }];
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('df', {
    description: 'Display filesystem disk usage',
    usage: 'df',
    handler: function() {
        let sizes = FS.df();
        let output = [];
        output.push({ type: 'info', text: 'Filesystem      Size  Used  Avail  Use%  Mounted on' });
        output.push({ type: 'info', text: 'rootfs          ' + (sizes.total/1000).toFixed(1) + 'M  ' + (sizes.used/1000).toFixed(1) + 'M  ' + (sizes.available/1000).toFixed(1) + 'M  ' + ((sizes.used/sizes.total)*100).toFixed(0) + '%  /' });
        return output;
    }
});

registerCommand('uptime', {
    description: 'Display system uptime',
    usage: 'uptime',
    handler: function() {
        let seconds = Math.floor(Date.now() / 1000);
        let days = Math.floor(seconds / 86400);
        let hours = Math.floor((seconds % 86400) / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        return [{ type: 'info', text: 'up ' + days + ' days, ' + String(hours).padStart(2,'0') + ':' + String(mins).padStart(2,'0') + ':' + String(secs).padStart(2,'0') + ' (since epoch)' }];
    }
});

registerCommand('uname', {
    description: 'Display system kernel information',
    usage: 'uname [-a]',
    handler: function() {
        return [{ type: 'info', text: 'MathPhys-WebOS 4.2.0 MP-Kernel x86_64 GNU/MathPhys' }];
    }
});

registerCommand('history', {
    description: 'Display command history',
    usage: 'history',
    handler: function() {
        let output = [];
        let history = window.terminal ? window.terminal.commandHistory : [];
        for (let i = 0; i < history.length; i++) {
            output.push({ type: 'info', text: String(i+1).padStart(4) + '  ' + history[i] });
        }
        return output;
    }
});

registerCommand('grep', {
    description: 'Search formula content (alias for search)',
    usage: 'grep [pattern]',
    handler: function(args) {
        return COMMANDS.search.handler(args);
    }
});

registerCommand('top', {
    description: 'Display system formula statistics',
    usage: 'top',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: 'Formula System Monitor' });
        output.push({ type: 'info', text: 'Math Formulas Loaded:     ' + MATH.getCount() });
        output.push({ type: 'info', text: 'Physics Formulas Loaded:  ' + PHYSICS.getCount() });
        output.push({ type: 'info', text: 'Total Formulas:           ' + (MATH.getCount()+PHYSICS.getCount()) });
        output.push({ type: 'info', text: 'Commands Available:       ' + Object.keys(COMMANDS).length });
        output.push({ type: 'info', text: 'Filesystem:              ' + Object.keys(FS.root.children).length + ' top-level entries' });
        return output;
    }
});

registerCommand('ps', {
    description: 'Display running processes',
    usage: 'ps',
    handler: function() {
        let output = [];
        output.push({ type: 'info', text: 'PID  PPID CMD' });
        output.push({ type: 'info', text: '1    0    kernel' });
        output.push({ type: 'info', text: '2    1    shell' });
        output.push({ type: 'info', text: '3    1    terminal' });
        output.push({ type: 'info', text: '4    1    formula-loader' });
        return output;
    }
});

registerCommand('su', {
    description: 'Switch user',
    usage: 'su [username]',
    handler: function(args) {
        return [{ type: 'info', text: 'Already running as root.' }];
    }
});

registerCommand('chmod', {
    description: 'Change file permissions',
    usage: 'chmod [mode] [file]',
    handler: function() {
        return [{ type: 'warning', text: 'chmod: not implemented in simulated filesystem' }];
    }
});

registerCommand('which', {
    description: 'Locate a command',
    usage: 'which [command]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'which: missing operand' }];
        if (COMMANDS[args[0]]) {
            return [{ type: 'info', text: '/usr/local/bin/' + args[0] }];
        }
        return [{ type: 'error', text: 'which: no ' + args[0] + ' in (/bin:/usr/bin:/usr/local/bin)' }];
    }
});

registerCommand('wc', {
    description: 'Count formulas, commands, or words',
    usage: 'wc [-m|-p]',
    handler: function(args) {
        if (args.includes('-m')) {
            return [{ type: 'info', text: MATH.getCount() + ' math formulas' }];
        }
        if (args.includes('-p')) {
            return [{ type: 'info', text: PHYSICS.getCount() + ' physics formulas' }];
        }
        return [{ type: 'info', text: (MATH.getCount()+PHYSICS.getCount()) + ' total formulas' }];
    }
});

registerCommand('head', {
    description: 'Display first N formulas of a category',
    usage: 'head [-n] [category]',
    handler: function(args) {
        let n = 10;
        let catArg = args[0];
        if (args[0] === '-n' && args[1]) {
            n = parseInt(args[1]);
            catArg = args[2];
        }
        if (!catArg) return [{ type: 'error', text: 'head: missing category operand' }];
        let results = MATH.search(catArg);
        if (results.length === 0) results = PHYSICS.search(catArg);
        if (results.length === 0) return [{ type: 'error', text: 'head: no results for "' + catArg + '"' }];
        let output = [];
        output.push({ type: 'info', text: 'First ' + n + ' of ' + results.length + ' results for "' + catArg + '":' });
        for (let r of results.slice(0, n)) {
            output.push({ type: 'formula', text: r.name + ': ' + r.expression });
        }
        return output;
    }
});

registerCommand('tail', {
    description: 'Display last N formulas of a search',
    usage: 'tail [-n] [category]',
    handler: function(args) {
        let n = 10;
        let catArg = args[0];
        if (args[0] === '-n' && args[1]) {
            n = parseInt(args[1]);
            catArg = args[2];
        }
        if (!catArg) return [{ type: 'error', text: 'tail: missing category operand' }];
        let results = MATH.search(catArg);
        if (results.length === 0) results = PHYSICS.search(catArg);
        if (results.length === 0) return [{ type: 'error', text: 'tail: no results for "' + catArg + '"' }];
        let output = [];
        output.push({ type: 'info', text: 'Last ' + n + ' of ' + results.length + ' results for "' + catArg + '":' });
        for (let r of results.slice(-n)) {
            output.push({ type: 'formula', text: r.name + ': ' + r.expression });
        }
        return output;
    }
});

registerCommand('sort', {
    description: 'Sort formula categories alphabetically',
    usage: 'sort [category]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'sort: missing operand' }];
        let results = MATH.search(args[0]);
        if (results.length === 0) results = PHYSICS.search(args[0]);
        results.sort((a,b) => a.name.localeCompare(b.name));
        let output = [];
        output.push({ type: 'info', text: 'Sorted ' + results.length + ' results for "' + args[0] + '":' });
        for (let r of results.slice(0, 20)) {
            output.push({ type: 'formula', text: r.name + ': ' + r.expression });
        }
        if (results.length > 20) output.push({ type: 'dim', text: '... and ' + (results.length-20) + ' more.' });
        return output;
    }
});

registerCommand('export', {
    description: 'Export formula category to virtual file',
    usage: 'export [category] [filename]',
    handler: function(args) {
        if (args.length < 2) return [{ type: 'error', text: 'export: usage: export [category] [filename]' }];
        let results = MATH.search(args[0]);
        if (results.length === 0) results = PHYSICS.search(args[0]);
        if (results.length === 0) return [{ type: 'error', text: 'export: no results for "' + args[0] + '"' }];
        let content = results.map(r => r.name + ': ' + r.expression + ' -- ' + r.description).join('\n');
        try {
            FS.writeFile(args[1], content);
            return [{ type: 'info', text: 'Exported ' + results.length + ' formulas to ' + args[1] }];
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('alias', {
    description: 'List defined aliases',
    usage: 'alias',
    handler: function() {
        return [{ type: 'info', text: 'No aliases defined.' }];
    }
});

registerCommand('calc', {
    description: 'Simple formula calculator (evaluation)',
    usage: 'calc [expression]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'calc: missing expression' }];
        let expr = args.join(' ');
        try {
            let result = Function('"use strict"; return (' + expr + ')')();
            return [{ type: 'info', text: expr + ' = ' + result }];
        } catch(e) {
            return [{ type: 'error', text: 'calc: invalid expression "' + expr + '"' }];
        }
    }
});

registerCommand('convert', {
    description: 'Convert between units',
    usage: 'convert [value] [from] [to]',
    handler: function(args) {
        if (args.length < 3) return [{ type: 'error', text: 'convert: usage: convert [value] [from] [to]' }];
        let val = parseFloat(args[0]);
        let from = args[1].toLowerCase();
        let to = args[2].toLowerCase();
        // Simple conversions
        const units = {
            'm': 1, 'km': 1000, 'cm': 0.01, 'mm': 0.001, 'in': 0.0254, 'ft': 0.3048, 'yd': 0.9144, 'mi': 1609.344,
            'kg': 1, 'g': 0.001, 'mg': 0.000001, 'lb': 0.453592, 'oz': 0.0283495, 't': 1000,
            's': 1, 'ms': 0.001, 'min': 60, 'h': 3600, 'd': 86400,
            'k': 1, 'c': 1, 'f': 1
        };
        if (from === 'c' || from === 'f') {
            if (to === 'k') {
                if (from === 'c') return [{ type: 'info', text: val + '°C = ' + (val + 273.15) + ' K' }];
                return [{ type: 'info', text: val + '°F = ' + ((val-32)*5/9+273.15) + ' K' }];
            }
            if (to === 'c') {
                if (from === 'k') return [{ type: 'info', text: val + ' K = ' + (val - 273.15) + '°C' }];
                return [{ type: 'info', text: val + '°F = ' + ((val-32)*5/9) + '°C' }];
            }
            if (to === 'f') {
                if (from === 'c') return [{ type: 'info', text: val + '°C = ' + (val*9/5+32) + '°F' }];
                return [{ type: 'info', text: val + ' K = ' + ((val-273.15)*9/5+32) + '°F' }];
            }
        }
        if (units[from] && units[to]) {
            let result = val * units[from] / units[to];
            return [{ type: 'info', text: val + ' ' + from + ' = ' + result.toFixed(6) + ' ' + to }];
        }
        return [{ type: 'error', text: 'convert: unknown units. Supported: m,km,cm,mm,in,ft,yd,mi,kg,g,mg,lb,oz,t,s,ms,min,h,d,k,c,f' }];
    }
});

registerCommand('constants', {
    description: 'Display fundamental physical constants',
    usage: 'constants',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: 'Fundamental Physical Constants' });
        output.push({ type: 'system', text: '' });
        let consts = [
            ['Speed of Light (c)', '2.99792458 × 10⁸', 'm/s'],
            ['Planck Constant (h)', '6.62607015 × 10⁻³⁴', 'J·s'],
            ['Reduced Planck (ℏ)', '1.054571817 × 10⁻³⁴', 'J·s'],
            ['Gravitational Constant (G)', '6.67430 × 10⁻¹¹', 'm³/(kg·s²)'],
            ['Elementary Charge (e)', '1.602176634 × 10⁻¹⁹', 'C'],
            ['Electron Mass (m_e)', '9.1093837015 × 10⁻³¹', 'kg'],
            ['Proton Mass (m_p)', '1.67262192369 × 10⁻²⁷', 'kg'],
            ['Neutron Mass (m_n)', '1.67492749804 × 10⁻²⁷', 'kg'],
            ['Avogadro Number (N_A)', '6.02214076 × 10²³', 'mol⁻¹'],
            ['Boltzmann Constant (k)', '1.380649 × 10⁻²³', 'J/K'],
            ['Gas Constant (R)', '8.314462618', 'J/(mol·K)'],
            ['Stefan-Boltzmann (σ)', '5.670367 × 10⁻⁸', 'W/(m²·K⁴)'],
            ['Fine Structure (α)', '1/137.035999084', ''],
            ['Bohr Radius (a₀)', '5.29177210903 × 10⁻¹¹', 'm'],
            ['Bohr Magneton (μ_B)', '9.2740100783 × 10⁻²⁴', 'J/T'],
            ['Rydberg Constant (R_∞)', '1.0973731568160 × 10⁷', 'm⁻¹'],
            ['Magnetic Constant (μ₀)', '1.25663706212 × 10⁻⁶', 'N/A²'],
            ['Electric Constant (ε₀)', '8.8541878128 × 10⁻¹²', 'F/m'],
            ['Faraday Constant (F)', '96485.33212', 'C/mol'],
            ['Standard Gravity (g)', '9.80665', 'm/s²'],
            ['Atm Pressure (atm)', '101325', 'Pa'],
            ['Zero Celsius in Kelvin', '273.15', 'K'],
            ['Hubble Constant (H₀)', '∼67.4', 'km/s/Mpc'],
            ['Cosmological Constant (Λ)', '∼1.1 × 10⁻⁵²', 'm⁻²'],
            ['Planck Mass (m_P)', '2.176434 × 10⁻⁸', 'kg'],
            ['Planck Length (l_P)', '1.616255 × 10⁻³⁵', 'm'],
            ['Planck Time (t_P)', '5.391247 × 10⁻⁴⁴', 's'],
        ];
        for (let c of consts) {
            output.push({ type: 'formula', text: c[0].padEnd(30) + c[1].padEnd(25) + c[2] });
        }
        return output;
    }
});

registerCommand('units', {
    description: 'Display unit system information',
    usage: 'units',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: 'Unit System Information' });
        output.push({ type: 'system', text: 'SI Base Units:' });
        let baseUnits = [
            ['Length', 'meter', 'm'],
            ['Mass', 'kilogram', 'kg'],
            ['Time', 'second', 's'],
            ['Current', 'ampere', 'A'],
            ['Temperature', 'kelvin', 'K'],
            ['Amount', 'mole', 'mol'],
            ['Luminosity', 'candela', 'cd'],
        ];
        for (let u of baseUnits) {
            output.push({ type: 'info', text: '  ' + u[0].padEnd(16) + u[1].padEnd(16) + u[2] });
        }
        return output;
    }
});

registerCommand('timer', {
    description: 'Display timing info (system clock)',
    usage: 'timer',
    handler: function() {
        let now = new Date();
        return [{ type: 'info', text: 'System clock: ' + now.toISOString() + ' | Unix timestamp: ' + Math.floor(now.getTime()/1000) }];
    }
});

registerCommand('clock', {
    description: 'Display a real-time clock (static snapshot)',
    usage: 'clock',
    handler: function() {
        let now = new Date();
        let h = String(now.getHours()).padStart(2,'0');
        let m = String(now.getMinutes()).padStart(2,'0');
        let s = String(now.getSeconds()).padStart(2,'0');
        return [{ type: 'info', text: '┌─────────────┐\n│  ' + h + ':' + m + ':' + s + '  │\n└─────────────┘\n' + now.toDateString() }];
    }
});

registerCommand('ssh', {
    description: 'SSH connection (simulated)',
    usage: 'ssh [host]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'ssh: missing host' }];
        return [{ type: 'info', text: 'ssh: Connecting to ' + args[0] + '...\nssh: Unable to connect (simulated environment)' }];
    }
});

registerCommand('ping', {
    description: 'Ping a host (simulated)',
    usage: 'ping [host]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'ping: missing host' }];
        return [{ type: 'info', text: 'PING ' + args[0] + ' ...\n64 bytes from localhost: icmp_seq=1 ttl=64 time=0.1 ms\n64 bytes from localhost: icmp_seq=2 ttl=64 time=0.1 ms\n--- ' + args[0] + ' ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss' }];
    }
});

registerCommand('curl', {
    description: 'cURL request (simulated)',
    usage: 'curl [url]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'curl: missing URL' }];
        return [{ type: 'info', text: 'curl: Attempting to fetch ' + args[0] + '...\n(In simulated environment. Try webfetch via the search command instead.)' }];
    }
});

registerCommand('wget', {
    description: 'wget download (simulated)',
    usage: 'wget [url]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'wget: missing URL' }];
        return [{ type: 'info', text: 'wget: Downloading ' + args[0] + '...\n[====================] 100%\nDownload complete (simulated).' }];
    }
});

registerCommand('env', {
    description: 'Display environment variables',
    usage: 'env',
    handler: function() {
        let vars = [
            'SHELL=/bin/shell',
            'PWD=' + FS.currentPath,
            'USER=root',
            'HOME=/home/root',
            'PATH=/bin:/usr/bin:/usr/local/bin',
            'TERM=mathphys-term',
            'HOSTNAME=mathphys-os',
            'LANG=en_US.UTF-8',
            'FORMULA_PATH=/usr/share/formulas'
        ];
        return vars.map(v => ({ type: 'info', text: v }));
    }
});

registerCommand('printenv', {
    description: 'Print all or specific environment variables',
    usage: 'printenv [variable]',
    handler: function(args) {
        return COMMANDS.env.handler(args);
    }
});

registerCommand('yes', {
    description: 'Output a string repeatedly',
    usage: 'yes [string]',
    handler: function(args) {
        let str = args.join(' ') || 'y';
        let lines = [];
        for (let i = 0; i < 20; i++) lines.push(str);
        return lines.map(l => ({ type: 'info', text: l }));
    }
});

registerCommand('sleep', {
    description: 'Sleep simulation (does nothing)',
    usage: 'sleep [seconds]',
    handler: function() {
        return [{ type: 'info', text: 'sleep: (simulated - command returned immediately)' }];
    }
});

registerCommand('false', {
    description: 'Do nothing, unsuccessfully',
    usage: 'false',
    handler: function() {
        return [{ type: 'error', text: 'false: command failed' }];
    }
});

registerCommand('true', {
    description: 'Do nothing, successfully',
    usage: 'true',
    handler: function() {
        return [{ type: 'system', text: '' }];
    }
});

registerCommand('seq', {
    description: 'Print a sequence of numbers',
    usage: 'seq [last] or seq [first] [last]',
    handler: function(args) {
        let first = 1, last;
        if (args.length === 1) { last = parseInt(args[0]); }
        else if (args.length >= 2) { first = parseInt(args[0]); last = parseInt(args[1]); }
        if (isNaN(last)) return [{ type: 'error', text: 'seq: invalid number' }];
        let lines = [];
        for (let i = first; i <= last; i++) lines.push({ type: 'info', text: String(i) });
        return lines;
    }
});

registerCommand('tee', {
    description: 'Read from stdin and write to file',
    usage: 'tee [file]',
    handler: function(args) {
        return [{ type: 'info', text: 'tee: not fully implemented in terminal' }];
    }
});

registerCommand('xargs', {
    description: 'Build and execute command from input',
    usage: 'xargs [command]',
    handler: function() {
        return [{ type: 'info', text: 'xargs: not fully implemented in terminal' }];
    }
});

registerCommand('md5sum', {
    description: 'Compute MD5 checksum',
    usage: 'md5sum [text]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'md5sum: missing operand' }];
        return [{ type: 'info', text: 'md5sum: (checksum computation not available in browser environment)' }];
    }
});

registerCommand('du', {
    description: 'Estimate file space usage',
    usage: 'du [path]',
    handler: function(args) {
        let path = args[0] || FS.currentPath;
        let r = FS.resolveNode(path);
        if (!r) return [{ type: 'error', text: 'du: cannot access "' + path + '": No such file or directory' }];
        let size = FS._countSize(r.node);
        return [{ type: 'info', text: (size/1024).toFixed(2) + 'K\t' + path }];
    }
});

registerCommand('basename', {
    description: 'Strip directory from pathname',
    usage: 'basename [path]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'basename: missing operand' }];
        let parts = args[0].split('/').filter(p => p);
        return [{ type: 'info', text: parts[parts.length-1] || '/' }];
    }
});

registerCommand('dirname', {
    description: 'Strip last component from pathname',
    usage: 'dirname [path]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'dirname: missing operand' }];
        let path = args[0];
        let lastSlash = path.lastIndexOf('/');
        if (lastSlash === 0) return [{ type: 'info', text: '/' }];
        if (lastSlash > 0) return [{ type: 'info', text: path.substring(0, lastSlash) }];
        return [{ type: 'info', text: '.' }];
    }
});

registerCommand('factor', {
    description: 'Print prime factors',
    usage: 'factor [number]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'factor: missing operand' }];
        let n = parseInt(args[0]);
        if (isNaN(n) || n < 1) return [{ type: 'error', text: 'factor: invalid number "' + args[0] + '"' }];
        let result = n + ':';
        let d = 2;
        let val = n;
        while (val > 1) {
            while (val % d === 0) {
                result += ' ' + d;
                val /= d;
            }
            d++;
            if (d*d > val && val > 1) {
                result += ' ' + val;
                break;
            }
        }
        return [{ type: 'info', text: result }];
    }
});

registerCommand('nproc', {
    description: 'Print number of processing units',
    usage: 'nproc',
    handler: function() {
        return [{ type: 'info', text: navigator.hardwareConcurrency || '4' }];
    }
});

registerCommand('free', {
    description: 'Display amount of free and used memory (formula memory)',
    usage: 'free',
    handler: function() {
        let m = MATH.getCount();
        let p = PHYSICS.getCount();
        let total = m + p;
        let output = [];
        output.push({ type: 'info', text: '              total        formulas    categories' });
        output.push({ type: 'info', text: 'Math:         ' + String(m).padStart(8) + '    ' + String(Object.values(MATH.categories).reduce((a,c) => a+Object.keys(c.subcategories).length, 0)).padStart(8) + '    ' + String(Object.keys(MATH.categories).length).padStart(6) });
        output.push({ type: 'info', text: 'Physics:      ' + String(p).padStart(8) + '    ' + String(Object.values(PHYSICS.categories).reduce((a,c) => a+Object.keys(c.subcategories).length, 0)).padStart(8) + '    ' + String(Object.keys(PHYSICS.categories).length).padStart(6) });
        output.push({ type: 'info', text: 'Total:        ' + String(total).padStart(8) + '    ' + String(Object.values(MATH.categories).reduce((a,c) => a+Object.keys(c.subcategories).length, 0) + Object.values(PHYSICS.categories).reduce((a,c) => a+Object.keys(c.subcategories).length, 0)).padStart(8) + '    ' + String(Object.keys(MATH.categories).length + Object.keys(PHYSICS.categories).length).padStart(6) });
        return output;
    }
});

registerCommand('rev', {
    description: 'Reverse lines characterwise',
    usage: 'rev [text]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'rev: missing operand' }];
        let reversed = args.join(' ').split('').reverse().join('');
        return [{ type: 'info', text: reversed }];
    }
});

registerCommand('shuf', {
    description: 'Shuffle lines randomly',
    usage: 'shuf [text]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'shuf: missing operand' }];
        let chars = args.join(' ').split('');
        for (let i = chars.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        return [{ type: 'info', text: chars.join('') }];
    }
});

registerCommand('tr', {
    description: 'Translate characters',
    usage: 'tr [set1] [set2] [text]',
    handler: function(args) {
        if (args.length < 3) return [{ type: 'error', text: 'tr: missing operands' }];
        let set1 = args[0], set2 = args[1], text = args.slice(2).join(' ');
        let result = text.split('').map(c => {
            let idx = set1.indexOf(c);
            return idx >= 0 ? (set2[idx] || set2[set2.length-1]) : c;
        }).join('');
        return [{ type: 'info', text: result }];
    }
});

registerCommand('expand', {
    description: 'Convert tabs to spaces',
    usage: 'expand [text]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'expand: missing operand' }];
        return [{ type: 'info', text: args.join(' ').replace(/\t/g, '    ') }];
    }
});

registerCommand('nl', {
    description: 'Number lines of formula output',
    usage: 'nl [query]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'nl: missing operand' }];
        let results = MATH.search(args.join(' '));
        if (results.length === 0) results = PHYSICS.search(args.join(' '));
        let output = [];
        for (let i = 0; i < Math.min(results.length, 50); i++) {
            output.push({ type: 'info', text: String(i+1).padStart(4) + '  ' + results[i].name + ': ' + results[i].expression });
        }
        return output;
    }
});

registerCommand('fold', {
    description: 'Fold/wrap long formula lines',
    usage: 'fold [-w width] [text]',
    handler: function(args) {
        let width = 80;
        if (args[0] === '-w' && args[1]) {
            width = parseInt(args[1]);
            args = args.slice(2);
        }
        let text = args.join(' ');
        let lines = [];
        for (let i = 0; i < text.length; i += width) {
            lines.push({ type: 'info', text: text.slice(i, i+width) });
        }
        return lines;
    }
});

registerCommand('cowsay', {
    description: 'A cow says something formula-related',
    usage: 'cowsay [text]',
    handler: function(args) {
        let text = args.join(' ') || 'E = mc²';
        let line = ' ' + '-'.repeat(text.length+2);
        return [
            { type: 'info', text: line },
            { type: 'info', text: '< ' + text + ' >' },
            { type: 'info', text: line },
            { type: 'info', text: '        \\   ^__^' },
            { type: 'info', text: '         \\  (oo)\\_______' },
            { type: 'info', text: '            (__)\\       )\\/\\' },
            { type: 'info', text: '                ||----w |' },
            { type: 'info', text: '                ||     ||' },
        ];
    }
});

registerCommand('fortune', {
    description: 'Display a random formula-related fortune',
    usage: 'fortune',
    handler: function() {
        let fortunes = [
            '"Mathematics is the queen of sciences." - Carl Friedrich Gauss',
            '"E = mc² is not just a formula, it\'s a way of life." - Unknown Physicist',
            '"The laws of physics are the canvas upon which God paints." - Einstein',
            '"Pure mathematics is, in its way, the poetry of logical ideas." - Einstein',
            '"Nature uses only the longest threads to weave her patterns." - Feynman',
            '"I think I can safely say that nobody understands quantum mechanics." - Feynman',
            '"The most incomprehensible thing about the universe is that it is comprehensible." - Einstein',
            '"Imagination is more important than knowledge." - Einstein',
            '"God does not play dice with the universe." - Einstein',
            '"Stop telling God what to do." - Niels Bohr (responding to Einstein)',
            '"If I have seen further, it is by standing on the shoulders of giants." - Newton',
            '"The important thing is not to stop questioning." - Einstein',
            '"A mathematician is a device for turning coffee into theorems." - Erdos',
            '"42 is the answer to the ultimate question of life, the universe, and everything." - Douglas Adams',
            '"The universe is under no obligation to make sense to you." - NDT',
            '"Energy equals milk chocolate squared." - Homer Simpson',
            '"Mathematics is the art of giving the same name to different things." - Poincaré',
            '"Do or do not. There is no try." - Yoda',
            '"The only way to discover the limits of the possible is to go beyond them into the impossible." - Arthur C. Clarke',
            '"Everything should be made as simple as possible, but not simpler." - Einstein'
        ];
        let idx = Math.floor(Math.random() * fortunes.length);
        return [{ type: 'info', text: fortunes[idx] }];
    }
});

registerCommand('banner', {
    description: 'Print a formula banner in large ASCII',
    usage: 'banner [text]',
    handler: function(args) {
        let text = args.join(' ') || 'MATH';
        let output = [];
        output.push({ type: 'heading', text: '=== ' + text.toUpperCase() + ' ===' });
        output.push({
            type: 'info',
            text: '  __  __    _    ____ _   _   \n' +
                  ' |  \\/  |  / \\  / ___| | | |  \n' +
                  ' | |\\/| | / _ \\| |   | |_| |  \n' +
                  ' | |  | |/ ___ \\ |___|  _  |  \n' +
                  ' |_|  |_/_/   \\_\\____|_| |_|  '
        });
        return output;
    }
});

registerCommand('figlet', {
    description: 'Display text in large ASCII (figlet-like)',
    usage: 'figlet [text]',
    handler: function(args) {
        let text = args.join(' ') || 'FORMULA';
        let ascii = '';
        for (let c of text.toUpperCase()) {
            if (c >= 'A' && c <= 'Z') {
                ascii += ' ' + c + ' ';
            } else {
                ascii += '   ';
            }
        }
        return [
            { type: 'info', text: text.toUpperCase() },
            { type: 'dim', text: 'FIGlet not fully implemented. Use "banner" instead.' }
        ];
    }
});

registerCommand('lolcat', {
    description: 'Display formula in rainbow colors (simulated)',
    usage: 'lolcat [text]',
    handler: function(args) {
        let text = args.join(' ') || 'MathPhys WebOS';
        let colors = ['#ff0000', '#ff8800', '#ffff00', '#00ff00', '#0088ff', '#8800ff'];
        let colorful = text.split('').map((c,i) => `<span style="color:${colors[i%colors.length]}">${c}</span>`).join('');
        return [{ type: 'info', text: text + ' (rainbow effect not available in plain text)' }];
    }
});

registerCommand('cmatrix', {
    description: 'Display matrix-like rain effect (simulated)',
    usage: 'cmatrix',
    handler: function() {
        let lines = [];
        for (let i = 0; i < 10; i++) {
            let line = '';
            for (let j = 0; j < 50; j++) {
                line += String.fromCharCode(0x30A0 + Math.floor(Math.random()*96));
            }
            lines.push({ type: 'info', text: line, style: 'color: #00ff41; font-size: 11px;' });
        }
        return lines;
    }
});

registerCommand('htop', {
    description: 'Interactive process viewer (simulated)',
    usage: 'htop',
    handler: function() {
        let output = [];
        output.push({ type: 'heading', text: 'MathPhys WebOS Process Viewer (htop simulation)' });
        output.push({ type: 'info', text: '  PID USER      PRI  NI  VIRT   RES   CPU% MEM%   TIME+  Command' });
        output.push({ type: 'info', text: '    1 root       20   0  189M 12000   0.0  0.3  0:00.01 kernel' });
        output.push({ type: 'info', text: '    2 root       20   0  145M  8000   0.0  0.2  0:00.02 shell' });
        output.push({ type: 'info', text: '    3 root       20   0  256M 24000   0.0  0.6  0:00.05 terminal' });
        output.push({ type: 'info', text: '    4 root       20   0 1024M 512M    0.0 12.8  0:00.10 formula-loader' });
        return output;
    }
});

registerCommand('dmesg', {
    description: 'Print kernel ring buffer messages',
    usage: 'dmesg',
    handler: function() {
        let msgs = [
            '[    0.000000] Booting MathPhys WebOS Kernel 4.2.0',
            '[    0.010000] Processor: Math Formula Processor x64',
            '[    0.020000] Detected ' + navigator.hardwareConcurrency + ' logical formula processors',
            '[    0.500000] Mounting root filesystem...',
            '[    1.200000] Loading mathematical formulas: ' + MATH.getCount() + ' loaded',
            '[    2.400000] Loading physical formulas: ' + PHYSICS.getCount() + ' loaded',
            '[    3.000000] Initializing command shell...',
            '[    3.500000] Starting terminal service...',
            '[    4.000000] MathPhys WebOS v4.2.0 ready',
            '[    4.010000] Type "help" for available commands',
            '[    4.020000] Type "formulas" to browse formula categories',
        ];
        return msgs.map(m => ({ type: 'system', text: m }));
    }
});

registerCommand('lsblk', {
    description: 'List block devices (simulated)',
    usage: 'lsblk',
    handler: function() {
        return [
            { type: 'info', text: 'NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT' },
            { type: 'info', text: 'sda  8:0    0  1T  0  disk /' },
            { type: 'info', text: 'sdb  8:16   0  2T  0  disk /usr/share/formulas' },
        ];
    }
});

registerCommand('lspci', {
    description: 'List PCI devices (simulated)',
    usage: 'lspci',
    handler: function() {
        return [
            { type: 'info', text: '00:00.0 Formula Processing Bridge' },
            { type: 'info', text: '00:01.0 Math Coprocessor (Rev 42)' },
            { type: 'info', text: '00:02.0 Physics Acceleration Unit' },
            { type: 'info', text: '00:03.0 Quantum Computing Interface' },
        ];
    }
});

registerCommand('lsusb', {
    description: 'List USB devices (simulated)',
    usage: 'lsusb',
    handler: function() {
        return [
            { type: 'info', text: 'Bus 001 Device 001: ID 1d6b:0002 MathPhys Formula Hub' },
            { type: 'info', text: 'Bus 001 Device 002: ID 0424:9512 Knowledge Base Controller' },
            { type: 'info', text: 'Bus 002 Device 001: ID 1d6b:0003 Constant Generator' },
        ];
    }
});

registerCommand('ifconfig', {
    description: 'Configure network interface (simulated)',
    usage: 'ifconfig',
    handler: function() {
        return [
            { type: 'info', text: 'lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536' },
            { type: 'info', text: '    inet 127.0.0.1  netmask 255.0.0.0' },
            { type: 'info', text: '    inet6 ::1  prefixlen 128' },
            { type: 'info', text: 'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500' },
            { type: 'info', text: '    inet 192.168.1.42  netmask 255.255.255.0' },
            { type: 'info', text: '    inet6 fe80::42:42ff:fe42:4242  prefixlen 64' },
        ];
    }
});

registerCommand('ip', {
    description: 'Show/manipulate routing (simulated)',
    usage: 'ip addr',
    handler: function() {
        return COMMANDS.ifconfig.handler([]);
    }
});

registerCommand('route', {
    description: 'Show routing table (simulated)',
    usage: 'route',
    handler: function() {
        return [
            { type: 'info', text: 'Kernel IP routing table' },
            { type: 'info', text: 'Destination     Gateway         Genmask         Flags Metric Ref    Use Iface' },
            { type: 'info', text: 'default         192.168.1.1     0.0.0.0         UG    0      0        0 eth0' },
            { type: 'info', text: '192.168.1.0     *               255.255.255.0   U     0      0        0 eth0' },
        ];
    }
});

registerCommand('hostname', {
    description: 'Show or set hostname',
    usage: 'hostname',
    handler: function() {
        return [{ type: 'info', text: 'mathphys-os' }];
    }
});

registerCommand('who', {
    description: 'Show who is logged in',
    usage: 'who',
    handler: function() {
        return [{ type: 'info', text: 'root     tty1    ' + new Date().toLocaleString() }];
    }
});

registerCommand('w', {
    description: 'Show who is logged in and what they are doing',
    usage: 'w',
    handler: function() {
        let now = new Date();
        let t = String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');
        return [
            { type: 'info', text: t + ' up 0 days, load average: 0.00, 0.00, 0.00' },
            { type: 'info', text: 'USER     TTY      FROM       LOGIN@   IDLE   JCPU   PCPU  WHAT' },
            { type: 'info', text: 'root     tty1     -          ' + t + '    0.00s  0.00s  0.00s  exploring formulas' },
        ];
    }
});

registerCommand('last', {
    description: 'Show last logged in users',
    usage: 'last',
    handler: function() {
        return [
            { type: 'info', text: 'root     tty1        ' + new Date().toLocaleString() + '   still logged in' },
            { type: 'info', text: 'root     tty1        boot time   still running' },
            { type: 'info', text: '' },
            { type: 'info', text: 'wtmp begins boot time' },
        ];
    }
});

registerCommand('id', {
    description: 'Print user identity',
    usage: 'id',
    handler: function() {
        return [{ type: 'info', text: 'uid=0(root) gid=0(root) groups=0(root)' }];
    }
});

registerCommand('groups', {
    description: 'Show group memberships',
    usage: 'groups [user]',
    handler: function() {
        return [{ type: 'info', text: 'root : root' }];
    }
});

registerCommand('useradd', {
    description: 'Create a new user (simulated)',
    usage: 'useradd [username]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'useradd: missing username' }];
        return [{ type: 'info', text: 'useradd: user "' + args[0] + '" created (simulated)' }];
    }
});

registerCommand('passwd', {
    description: 'Change user password (simulated)',
    usage: 'passwd [user]',
    handler: function() {
        return [{ type: 'info', text: 'passwd: password updated (simulated)' }];
    }
});

registerCommand('kill', {
    description: 'Kill a process (simulated)',
    usage: 'kill [PID]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'kill: missing PID' }];
        return [{ type: 'info', text: 'kill: process ' + args[0] + ' terminated (simulated)' }];
    }
});

registerCommand('nohup', {
    description: 'Run command immune to hangups (simulated)',
    usage: 'nohup [command]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'nohup: missing command' }];
        return [{ type: 'info', text: 'nohup: ignoring input and appending output to nohup.out (simulated)' }];
    }
});

registerCommand('nice', {
    description: 'Run command with modified priority (simulated)',
    usage: 'nice [-n] [command]',
    handler: function() {
        return [{ type: 'info', text: 'nice: priority adjusted (simulated)' }];
    }
});

registerCommand('renice', {
    description: 'Alter priority of running processes',
    usage: 'renice [priority] [PID]',
    handler: function() {
        return [{ type: 'info', text: 'renice: priority changed (simulated)' }];
    }
});

registerCommand('time', {
    description: 'Time command execution (simulated)',
    usage: 'time [command]',
    handler: function() {
        return [
            { type: 'info', text: 'real    0m0.001s' },
            { type: 'info', text: 'user    0m0.000s' },
            { type: 'info', text: 'sys     0m0.001s' },
        ];
    }
});

registerCommand('watch', {
    description: 'Execute a command periodically (simulated)',
    usage: 'watch [command]',
    handler: function() {
        return [{ type: 'info', text: 'watch: every 2.0s: running (simulated, showing first result only)' }];
    }
});

registerCommand('screen', {
    description: 'Screen manager (simulated)',
    usage: 'screen',
    handler: function() {
        return [{ type: 'info', text: 'screen: terminal multiplexer (simulated environment)' }];
    }
});

registerCommand('tmux', {
    description: 'Terminal multiplexer (simulated)',
    usage: 'tmux',
    handler: function() {
        return [{ type: 'info', text: 'tmux: terminal multiplexer (not available in simulated environment)' }];
    }
});

registerCommand('diff', {
    description: 'Compare formula categories (simplified)',
    usage: 'diff [cat1] [cat2]',
    handler: function(args) {
        if (args.length < 2) return [{ type: 'error', text: 'diff: missing operands' }];
        let r1 = MATH.search(args[0]);
        let r2 = PHYSICS.search(args[1]);
        if (r1.length === 0) r1 = MATH.search(args[0]);
        if (r2.length === 0) r2 = PHYSICS.search(args[1]);
        return [{ type: 'info', text: 'diff: ' + args[0] + ' has ' + r1.length + ' entries, ' + args[1] + ' has ' + r2.length + ' entries' }];
    }
});

registerCommand('comm', {
    description: 'Compare two sorted formula lists',
    usage: 'comm [cat1] [cat2]',
    handler: function(args) {
        if (args.length < 2) return [{ type: 'error', text: 'comm: missing operands' }];
        return [{ type: 'info', text: 'comm: comparison not fully implemented' }];
    }
});

registerCommand('uniq', {
    description: 'Report or omit repeated formulas',
    usage: 'uniq [query]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'uniq: missing operand' }];
        let results = MATH.search(args.join(' '));
        if (results.length === 0) results = PHYSICS.search(args.join(' '));
        let seen = new Set();
        let uniq = results.filter(r => {
            let key = r.name;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
        return [{ type: 'info', text: 'uniq: ' + results.length + ' → ' + uniq.length + ' unique entries' }];
    }
});

registerCommand('yes', {});

registerCommand('test', {
    description: 'Evaluate conditional expression (simple math test)',
    usage: 'test [expression]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'test: missing operand' }];
        try {
            let result = Function('"use strict"; return (' + args.join(' ') + ')')();
            return [{ type: 'info', text: result ? 'true' : 'false' }];
        } catch(e) {
            return [{ type: 'error', text: 'test: invalid expression' }];
        }
    }
});

registerCommand('expr', {
    description: 'Evaluate expression',
    usage: 'expr [expression]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'expr: missing operand' }];
        try {
            let result = Function('"use strict"; return (' + args.join(' ') + ')')();
            return [{ type: 'info', text: String(result) }];
        } catch(e) {
            return [{ type: 'error', text: 'expr: invalid expression "' + args.join(' ') + '"' }];
        }
    }
});

registerCommand('bc', {
    description: 'An arbitrary precision calculator language (simplified)',
    usage: 'bc [expression]',
    handler: function(args) {
        return COMMANDS.calc.handler(args);
    }
});

registerCommand('dc', {
    description: 'Desk calculator (reverse polish notation - simplified)',
    usage: 'dc [expression]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'dc: missing expression' }];
        // Simple RPN
        let stack = [];
        let tokens = args.join(' ').split(/\s+/);
        for (let t of tokens) {
            if (['+','-','*','/','^'].includes(t)) {
                if (stack.length < 2) return [{ type: 'error', text: 'dc: stack underflow' }];
                let b = stack.pop(), a = stack.pop();
                switch(t) {
                    case '+': stack.push(a+b); break;
                    case '-': stack.push(a-b); break;
                    case '*': stack.push(a*b); break;
                    case '/': stack.push(a/b); break;
                    case '^': stack.push(Math.pow(a,b)); break;
                }
            } else {
                let n = parseFloat(t);
                if (!isNaN(n)) stack.push(n);
            }
        }
        if (stack.length === 0) return [{ type: 'error', text: 'dc: empty stack' }];
        return [{ type: 'info', text: String(stack[stack.length-1]) }];
    }
});

registerCommand('python', {
    description: 'Python interpreter (simulated)',
    usage: 'python [code]',
    handler: function() {
        return [{ type: 'info', text: 'Python 3.11.0 (simulated, not available in this environment)' }];
    }
});

registerCommand('gcc', {
    description: 'GNU C compiler (simulated)',
    usage: 'gcc [file]',
    handler: function() {
        return [{ type: 'info', text: 'gcc: not available in simulated environment' }];
    }
});

registerCommand('vim', {
    description: 'Vi IMproved (simulated)',
    usage: 'vim [file]',
    handler: function() {
        return [{ type: 'info', text: 'Vim: Not available. Use filesystem commands to create and edit files.' }];
    }
});

registerCommand('nano', {
    description: 'Nano text editor (simulated)',
    usage: 'nano [file]',
    handler: function() {
        return [{ type: 'info', text: 'Nano: Not available. Use filesystem commands to create and edit files.' }];
    }
});

registerCommand('emacs', {
    description: 'Emacs text editor (simulated)',
    usage: 'emacs [file]',
    handler: function() {
        return [{ type: 'info', text: 'Emacs: Not available. Use filesystem commands (touch, cat, cp, rm) instead.' }];
    }
});

registerCommand('sed', {
    description: 'Stream editor (simplified)',
    usage: 'sed [pattern] [text]',
    handler: function(args) {
        if (args.length < 2) return [{ type: 'error', text: 'sed: missing operands' }];
        // Simple regex substitution: s/old/new/
        let pattern = args[0];
        let text = args.slice(1).join(' ');
        if (pattern.startsWith('s/') && pattern.includes('/')) {
            let parts = pattern.slice(2).split('/');
            if (parts.length >= 2) {
                try {
                    let regex = new RegExp(parts[0], 'g');
                    let replacement = parts[1] || '';
                    return [{ type: 'info', text: text.replace(regex, replacement) }];
                } catch(e) {}
            }
        }
        return [{ type: 'info', text: text }];
    }
});

registerCommand('awk', {
    description: 'Pattern scanning language (simplified)',
    usage: 'awk [pattern] [text]',
    handler: function() {
        return [{ type: 'info', text: 'awk: simplified version not fully implemented' }];
    }
});

registerCommand('gzip', {
    description: 'Compress data (simulated)',
    usage: 'gzip [file]',
    handler: function() {
        return [{ type: 'info', text: 'gzip: compression not available in simulated environment' }];
    }
});

registerCommand('gunzip', {
    description: 'Decompress data (simulated)',
    usage: 'gunzip [file]',
    handler: function() {
        return [{ type: 'info', text: 'gunzip: decompression not available in simulated environment' }];
    }
});

registerCommand('tar', {
    description: 'Tape archiver (simulated)',
    usage: 'tar [args] [file]',
    handler: function() {
        return [{ type: 'info', text: 'tar: archiving not available in simulated environment' }];
    }
});

registerCommand('zip', {
    description: 'Package and compress (simulated)',
    usage: 'zip [archive] [files]',
    handler: function() {
        return [{ type: 'info', text: 'zip: compression not available in simulated environment' }];
    }
});

registerCommand('unzip', {
    description: 'Extract compressed files (simulated)',
    usage: 'unzip [file]',
    handler: function() {
        return [{ type: 'info', text: 'unzip: extraction not available in simulated environment' }];
    }
});

registerCommand('make', {
    description: 'GNU Make (simulated)',
    usage: 'make',
    handler: function() {
        return [{ type: 'info', text: 'make: No Makefile found' }];
    }
});

registerCommand('git', {
    description: 'Git version control (simulated)',
    usage: 'git [command]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'info', text: 'git: available commands: clone, init, add, commit, push, pull, status' }];
        return [{ type: 'info', text: 'git: ' + args.join(' ') + ' (simulated - not fully implemented)' }];
    }
});

registerCommand('sudo', {
    description: 'Execute command as superuser',
    usage: 'sudo [command]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'sudo: missing command' }];
        // Re-run the command as root (already root)
        return [{ type: 'info', text: 'Already running as root. Executing: ' + args.join(' ') }];
    }
});

registerCommand('apt', {
    description: 'APT package manager (simulated)',
    usage: 'apt [install|update|search] [package]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'apt: missing command' }];
        if (args[0] === 'update') {
            return [{ type: 'info', text: 'apt: Updating formula database... Already up to date.' }];
        }
        if (args[0] === 'search' && args[1]) {
            return [{ type: 'info', text: 'apt: Searching for "' + args[1] + '"...\n  formula-' + args[1] + ' - Formula package for ' + args[1] }];
        }
        if (args[0] === 'install' && args[1]) {
            return [{ type: 'info', text: 'apt: Installing ' + args[1] + '... (simulated)' }];
        }
        return [{ type: 'info', text: 'apt: command not fully implemented' }];
    }
});

registerCommand('dnf', {
    description: 'DNF package manager (simulated)',
    usage: 'dnf [command] [package]',
    handler: function() {
        return [{ type: 'info', text: 'dnf: use "apt" instead (simulated)' }];
    }
});

registerCommand('pacman', {
    description: 'Pacman package manager (simulated)',
    usage: 'pacman -S [package]',
    handler: function() {
        return [{ type: 'info', text: 'pacman: use "apt" instead (simulated)' }];
    }
});

registerCommand('brew', {
    description: 'Homebrew package manager (simulated)',
    usage: 'brew install [formula]',
    handler: function(args) {
        if (args[0] === 'install' && args[1]) {
            return [{ type: 'info', text: 'brew: Installing formula package "' + args[1] + '"... (simulated)' }];
        }
        return [{ type: 'info', text: 'brew: Homebrew (simulated - not available)' }];
    }
});

registerCommand('npm', {
    description: 'Node package manager (simulated)',
    usage: 'npm [command]',
    handler: function() {
        return [{ type: 'info', text: 'npm: not available in this environment' }];
    }
});

registerCommand('pip', {
    description: 'Python package installer (simulated)',
    usage: 'pip install [package]',
    handler: function() {
        return [{ type: 'info', text: 'pip: not available in this environment' }];
    }
});

registerCommand('docker', {
    description: 'Docker container management (simulated)',
    usage: 'docker [command]',
    handler: function() {
        return [{ type: 'info', text: 'docker: not available in simulated environment' }];
    }
});

registerCommand('kubectl', {
    description: 'Kubernetes CLI (simulated)',
    usage: 'kubectl [command]',
    handler: function() {
        return [{ type: 'info', text: 'kubectl: not available in simulated environment' }];
    }
});

registerCommand('systemctl', {
    description: 'Systemd service manager (simulated)',
    usage: 'systemctl [status|start|stop] [service]',
    handler: function(args) {
        if (!args[1]) return [{ type: 'info', text: 'systemctl: running services:\n  formula-loader.service\n  terminal.service\n  shell.service' }];
        if (args[0] === 'status') return [{ type: 'info', text: '● ' + args[1] + ' - active (running)' }];
        return [{ type: 'info', text: 'systemctl: ' + args.join(' ') + ' (simulated)' }];
    }
});

registerCommand('journalctl', {
    description: 'Query the systemd journal (simulated)',
    usage: 'journalctl',
    handler: function() {
        return COMMANDS.dmesg.handler([]);
    }
});

registerCommand('crontab', {
    description: 'Schedule periodic commands (simulated)',
    usage: 'crontab -l',
    handler: function() {
        return [{ type: 'info', text: 'crontab: no crontab for root' }];
    }
});

registerCommand('at', {
    description: 'Schedule a command for later execution (simulated)',
    usage: 'at [time]',
    handler: function() {
        return [{ type: 'info', text: 'at: scheduled (simulated)' }];
    }
});

registerCommand('alias', {
    description: 'Define or display aliases',
    usage: 'alias [name=value]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'info', text: 'No aliases defined.' }];
        return [{ type: 'info', text: args[0] + ' (alias defined)' }];
    }
});

registerCommand('unalias', {
    description: 'Remove an alias',
    usage: 'unalias [name]',
    handler: function() {
        return [{ type: 'info', text: 'unalias: done' }];
    }
});

registerCommand('type', {
    description: 'Describe a command',
    usage: 'type [command]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'type: missing operand' }];
        if (COMMANDS[args[0]]) return [{ type: 'info', text: args[0] + ' is a shell builtin' }];
        return [{ type: 'error', text: 'type: ' + args[0] + ': not found' }];
    }
});

registerCommand('hash', {
    description: 'Remember command locations (simulated)',
    usage: 'hash',
    handler: function() {
        return [{ type: 'info', text: 'hash: command hash table empty' }];
    }
});

registerCommand('bind', {
    description: 'Display readline key bindings (simulated)',
    usage: 'bind -p',
    handler: function() {
        return [{ type: 'info', text: 'bind: key bindings not configurable in this terminal' }];
    }
});

registerCommand('set', {
    description: 'Set shell attributes (simulated)',
    usage: 'set',
    handler: function() {
        return [{ type: 'info', text: 'set: no custom shell attributes set' }];
    }
});

registerCommand('unset', {
    description: 'Unset shell variables (simulated)',
    usage: 'unset [var]',
    handler: function() {
        return [{ type: 'info', text: 'unset: done' }];
    }
});

registerCommand('readonly', {
    description: 'Mark variables as read-only (simulated)',
    usage: 'readonly [var]',
    handler: function() {
        return [{ type: 'info', text: 'readonly: done' }];
    }
});

registerCommand('shift', {
    description: 'Shift positional parameters (simulated)',
    usage: 'shift [n]',
    handler: function() {
        return [{ type: 'system', text: '' }];
    }
});

registerCommand('exit', {
    description: 'Exit the shell',
    usage: 'exit',
    handler: function() {
        return [
            { type: 'warning', text: 'logout: Session closed. Close the browser tab to exit.' },
            { type: 'shutdown' }
        ];
    }
});

registerCommand('logout', {
    description: 'Log out of the shell',
    usage: 'logout',
    handler: function() {
        return COMMANDS.exit.handler([]);
    }
});

registerCommand('source', {
    description: 'Execute commands from a file (simulated)',
    usage: 'source [file]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'source: missing filename' }];
        try {
            let content = FS.readFile(args[0]);
            return [{ type: 'info', text: 'Sourced: ' + args[0] + ' (' + content.length + ' chars)' }];
        } catch(e) {
            return [{ type: 'error', text: 'source: ' + e.message }];
        }
    }
});

registerCommand('.', {
    description: 'Source a file (alias for source)',
    usage: '. [file]',
    handler: function(args) {
        return COMMANDS.source.handler(args);
    }
});

registerCommand('exec', {
    description: 'Execute a command (replacement, simulated)',
    usage: 'exec [command]',
    handler: function() {
        return [{ type: 'info', text: 'exec: not fully implemented' }];
    }
});

registerCommand('bg', {
    description: 'Resume job in background (simulated)',
    usage: 'bg [job]',
    handler: function() {
        return [{ type: 'info', text: 'bg: job backgrounded (simulated)' }];
    }
});

registerCommand('fg', {
    description: 'Bring job to foreground (simulated)',
    usage: 'fg [job]',
    handler: function() {
        return [{ type: 'info', text: 'fg: job foregrounded (simulated)' }];
    }
});

registerCommand('jobs', {
    description: 'List active jobs (simulated)',
    usage: 'jobs',
    handler: function() {
        return [{ type: 'info', text: 'jobs: no active jobs' }];
    }
});

registerCommand('disown', {
    description: 'Remove job from job table (simulated)',
    usage: 'disown [job]',
    handler: function() {
        return [{ type: 'info', text: 'disown: job removed from job table' }];
    }
});

registerCommand('wait', {
    description: 'Wait for job completion (simulated)',
    usage: 'wait [PID]',
    handler: function() {
        return [{ type: 'system', text: '' }];
    }
});

registerCommand('suspend', {
    description: 'Suspend shell execution (simulated)',
    usage: 'suspend',
    handler: function() {
        return [{ type: 'info', text: 'suspend: shell suspended (use fg to resume)' }];
    }
});

registerCommand('enable', {
    description: 'Enable/disable shell builtins (simulated)',
    usage: 'enable [command]',
    handler: function() {
        return [{ type: 'info', text: 'enable: not fully implemented' }];
    }
});

registerCommand('help_builtin', {
    description: 'Display help about builtins',
    usage: 'help_builtin',
    handler: function() {
        return COMMANDS.help.handler([]);
    }
});

registerCommand('echo_builtin', {});

registerCommand('printf', {
    description: 'Format and print data',
    usage: 'printf [format] [args]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'printf: missing format' }];
        return [{ type: 'info', text: args.join(' ') }];
    }
});

registerCommand('read', {
    description: 'Read a line from stdin (simulated)',
    usage: 'read [var]',
    handler: function() {
        return [{ type: 'info', text: 'read: not interactive in this terminal' }];
    }
});

registerCommand('mapfile', {
    description: 'Read lines from stdin (simulated)',
    usage: 'mapfile [array]',
    handler: function() {
        return [{ type: 'info', text: 'mapfile: not fully implemented' }];
    }
});

registerCommand('let', {
    description: 'Arithmetic evaluation (simulated)',
    usage: 'let [expression]',
    handler: function(args) {
        return COMMANDS.calc.handler(args);
    }
});

registerCommand('declare', {
    description: 'Declare variables and attributes (simulated)',
    usage: 'declare [var]',
    handler: function() {
        return [{ type: 'info', text: 'declare: not fully implemented' }];
    }
});

registerCommand('local', {
    description: 'Create local variables (simulated)',
    usage: 'local [var]',
    handler: function() {
        return [{ type: 'info', text: 'local: not fully implemented' }];
    }
});

registerCommand('export_variable', {
    description: 'Export environment variable (simulated)',
    usage: 'export [var]=[value]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'info', text: 'export: use env to see current environment' }];
        return [{ type: 'info', text: 'export: variable set (simulated)' }];
    }
});

registerCommand('getopts', {
    description: 'Parse positional parameters (simulated)',
    usage: 'getopts [optstring] [name]',
    handler: function() {
        return [{ type: 'system', text: '' }];
    }
});

registerCommand('return', {
    description: 'Return from shell function (simulated)',
    usage: 'return [n]',
    handler: function() {
        return [{ type: 'system', text: '' }];
    }
});

registerCommand('break', {
    description: 'Break out of loop (simulated)',
    usage: 'break [n]',
    handler: function() {
        return [{ type: 'system', text: '' }];
    }
});

registerCommand('continue', {
    description: 'Continue to next iteration (simulated)',
    usage: 'continue [n]',
    handler: function() {
        return [{ type: 'system', text: '' }];
    }
});

registerCommand('for', {
    description: 'For loop (simulated, limited support)',
    usage: 'for [var] in [list]; do [cmd]; done',
    handler: function() {
        return [{ type: 'info', text: 'for: shell loop structures not supported in single-command mode' }];
    }
});

registerCommand('while', {
    description: 'While loop (simulated)',
    usage: 'while [condition]; do [cmd]; done',
    handler: function() {
        return [{ type: 'info', text: 'while: shell loop structures not supported in single-command mode' }];
    }
});

registerCommand('until', {
    description: 'Until loop (simulated)',
    usage: 'until [condition]; do [cmd]; done',
    handler: function() {
        return [{ type: 'info', text: 'until: shell loop structures not supported in single-command mode' }];
    }
});

registerCommand('if', {
    description: 'If conditional (simulated)',
    usage: 'if [cond]; then [cmd]; fi',
    handler: function() {
        return [{ type: 'info', text: 'if: shell conditionals not supported in single-command mode' }];
    }
});

registerCommand('case', {
    description: 'Case conditional (simulated)',
    usage: 'case [word] in [pattern]) [cmd];; esac',
    handler: function() {
        return [{ type: 'info', text: 'case: shell conditionals not supported in single-command mode' }];
    }
});

registerCommand('select', {
    description: 'Select from menu (simulated)',
    usage: 'select [var] in [list]; do [cmd]; done',
    handler: function() {
        return [{ type: 'info', text: 'select: shell structures not supported in single-command mode' }];
    }
});

registerCommand('coproc', {
    description: 'Create coprocess (simulated)',
    usage: 'coproc [cmd]',
    handler: function() {
        return [{ type: 'info', text: 'coproc: not supported in simulated environment' }];
    }
});

registerCommand('evals', {
    description: 'Evaluate expression (simulated)',
    usage: 'eval [expr]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'eval: missing expression' }];
        return [{ type: 'info', text: args.join(' ') }];
    }
});

registerCommand('trap', {
    description: 'Trap signals (simulated)',
    usage: 'trap [action] [signal]',
    handler: function() {
        return [{ type: 'system', text: '' }];
    }
});

// ============= NEW FEATURES =============

registerCommand('read', {
    description: 'Read and display a file with line numbers',
    usage: 'read [file]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'read: missing file operand' }];
        try {
            let content = FS.readFile(args[0]);
            let lines = content.split('\n');
            let output = [];
            let numWidth = String(lines.length).length;
            for (let i = 0; i < lines.length; i++) {
                let num = String(i + 1).padStart(numWidth);
                output.push({ type: 'info', text: '  ' + num + '  | ' + lines[i] });
            }
            return output;
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('more', {
    description: 'Read file with paging (press any key to continue)',
    usage: 'more [file]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'more: missing file operand' }];
        try {
            let content = FS.readFile(args[0]);
            let lines = content.split('\n').map(l => ({ type: 'info', text: l }));
            return { type: 'more', lines: lines };
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('doc', {
    description: 'Display built-in documentation about the system',
    usage: 'doc [topic]',
    handler: function(args) {
        let docs = {
            'about': 'MathPhys WebOS - A minimalist web-based operating system\nfor browsing mathematical and physics formulas.\n\nFeatures:\n- 200,000+ formulas across 15+ categories\n- Virtual filesystem with Linux-like commands\n- Formula search engine\n- Unit conversion & calculator\n\nType "help" for available commands.',
            'filesystem': 'Virtual Filesystem\n\nThe filesystem is a simulated Linux-like hierarchy.\nCommon directories: /home, /etc, /usr, /var, /tmp\nCommon commands: ls, cd, pwd, cat, touch, mkdir, rm, cp, mv, tree',
            'formulas': 'Formula Browsing\n\nMath categories: algebra, geometry, calculus, trig, linear-algebra,\nnumber-theory, probability, set-theory, combinatorics, topology,\ndifferential-equations, measure-theory, tensors, optimization, discrete\n\nPhysics categories: mechanics, thermo, electromag, optics, quantum,\nrelativity, nuclear, fluid-mechanics, solid-state, astrophysics,\nacoustics, plasma\n\nUse "formulas" to see all categories and counts.',
            'keyboard': 'Keyboard Shortcuts\n\nCtrl+L  - Clear screen\nCtrl+C  - Cancel current command\nCtrl+D  - Exit shell (on empty line)\nCtrl+U  - Clear input line\nCtrl+W  - Delete last word\nTab     - Auto-complete commands/paths\nArrow Up/Down - Command history',
            'commands': 'All system commands emulate a Linux terminal.\nUse "help" for the full list.\nUse "man [command]" for details about a specific command.',
        };
        if (args[0]) {
            let topic = args[0].toLowerCase();
            if (docs[topic]) {
                return [{ type: 'heading', text: 'Doc: ' + topic }, { type: 'info', text: docs[topic] }];
            }
            return [{ type: 'error', text: 'doc: no documentation for "' + topic + '"' }];
        }
        let output = [{ type: 'heading', text: 'Documentation Topics' }];
        for (let t in docs) {
            let desc = docs[t].split('\n')[0];
            output.push({ type: 'info', text: '  ' + t.padEnd(16) + desc });
        }
        output.push({ type: 'system', text: '\nUse "doc [topic]" to read documentation.' });
        return output;
    }
});

registerCommand('todo', {
    description: 'Manage a simple todo list saved in the filesystem',
    usage: 'todo [list|add|done|rm] [item]',
    handler: function(args) {
        let todoFile = '/home/root/todo.txt';
        let todos = [];
        try { let raw = FS.readFile(todoFile); todos = raw.split('\n').filter(l => l.trim()); } catch(e) {}

        if (!args[0] || args[0] === 'list') {
            if (todos.length === 0) return [{ type: 'info', text: 'No todos. Use "todo add <item>" to add one.' }];
            let output = [{ type: 'heading', text: 'TODO List (' + todos.length + ' items)' }];
            for (let i = 0; i < todos.length; i++) {
                let done = todos[i].startsWith('[x]');
                let mark = done ? '[x]' : '[ ]';
                let num = String(i + 1).padStart(3);
                output.push({ type: 'info', text: num + ' ' + mark + ' ' + (done ? todos[i].slice(3) : todos[i]) });
            }
            return output;
        }

        if (args[0] === 'add' && args[1]) {
            let item = args.slice(1).join(' ');
            todos.push(item);
            FS.writeFile(todoFile, todos.join('\n') + '\n');
            return [{ type: 'info', text: 'Added: ' + item }];
        }

        if (args[0] === 'done' && args[1]) {
            let idx = parseInt(args[1]) - 1;
            if (isNaN(idx) || idx < 0 || idx >= todos.length) return [{ type: 'error', text: 'todo: invalid index' }];
            todos[idx] = '[x]' + todos[idx].replace(/^\[x\]/, '');
            FS.writeFile(todoFile, todos.join('\n') + '\n');
            return [{ type: 'info', text: 'Done: ' + todos[idx].slice(3) }];
        }

        if (args[0] === 'rm' && args[1]) {
            let idx = parseInt(args[1]) - 1;
            if (isNaN(idx) || idx < 0 || idx >= todos.length) return [{ type: 'error', text: 'todo: invalid index' }];
            let removed = todos.splice(idx, 1);
            FS.writeFile(todoFile, todos.join('\n') + '\n');
            return [{ type: 'info', text: 'Removed: ' + removed[0].replace(/^\[x\]/, '') }];
        }

        return [{ type: 'error', text: 'Usage: todo [list|add|done|rm] [item]' }];
    }
});

registerCommand('notes', {
    description: 'Take quick notes saved to the filesystem',
    usage: 'notes [add|list|rm] [text]',
    handler: function(args) {
        let notesFile = '/home/root/notes.txt';
        let notes = [];
        try { let raw = FS.readFile(notesFile); notes = raw.split('\n').filter(l => l.trim()); } catch(e) {}

        if (!args[0] || args[0] === 'list') {
            if (notes.length === 0) return [{ type: 'info', text: 'No notes. Use "notes add <text>" to add one.' }];
            let output = [{ type: 'heading', text: 'Notes (' + notes.length + ' items)' }];
            for (let i = 0; i < notes.length; i++) {
                output.push({ type: 'dim', text: '  [' + (i+1) + ']' });
                output.push({ type: 'info', text: '       ' + notes[i] });
            }
            return output;
        }

        if (args[0] === 'add' && args[1]) {
            let text = args.slice(1).join(' ');
            let date = new Date().toLocaleDateString();
            notes.push(date + ': ' + text);
            FS.writeFile(notesFile, notes.join('\n') + '\n');
            return [{ type: 'info', text: 'Note saved.' }];
        }

        if (args[0] === 'rm' && args[1]) {
            let idx = parseInt(args[1]) - 1;
            if (isNaN(idx) || idx < 0 || idx >= notes.length) return [{ type: 'error', text: 'notes: invalid index' }];
            let removed = notes.splice(idx, 1);
            FS.writeFile(notesFile, notes.join('\n') + '\n');
            return [{ type: 'info', text: 'Removed note ' + (idx+1) }];
        }

        return [{ type: 'error', text: 'Usage: notes [add|list|rm] [text]' }];
    }
});

registerCommand('weather', {
    description: 'Display simulated local weather data',
    usage: 'weather [city]',
    handler: function(args) {
        let cities = {
            'new york': { temp: 22, cond: 'Partly Cloudy', humid: 58, wind: '12 km/h' },
            'london': { temp: 16, cond: 'Light Rain', humid: 72, wind: '18 km/h' },
            'tokyo': { temp: 26, cond: 'Clear', humid: 55, wind: '8 km/h' },
            'paris': { temp: 20, cond: 'Sunny', humid: 50, wind: '10 km/h' },
            'sydney': { temp: 28, cond: 'Sunny', humid: 45, wind: '15 km/h' },
            'beijing': { temp: 30, cond: 'Hazy', humid: 40, wind: '8 km/h' },
            'moscow': { temp: 18, cond: 'Overcast', humid: 65, wind: '14 km/h' },
            'mumbai': { temp: 32, cond: 'Humid', humid: 80, wind: '6 km/h' },
            'cairo': { temp: 35, cond: 'Hot & Dry', humid: 15, wind: '20 km/h' },
            'berlin': { temp: 19, cond: 'Cloudy', humid: 60, wind: '12 km/h' },
        };
        let city = args.join(' ').toLowerCase() || 'new york';
        let data = cities[city];
        if (!data) {
            return [{ type: 'warning', text: 'weather: no data for "' + args.join(' ') + '". Try: New York, London, Tokyo, Paris, Sydney, Beijing, Moscow, Mumbai, Cairo, Berlin' }];
        }
        let now = new Date();
        let time = now.toLocaleTimeString();
        let date = now.toLocaleDateString();
        let output = [];
        output.push({ type: 'heading', text: 'Weather - ' + city.charAt(0).toUpperCase() + city.slice(1) });
        output.push({ type: 'info', text: '  Date:      ' + date + ' ' + time });
        output.push({ type: 'info', text: '  Condition: ' + data.cond });
        output.push({ type: 'info', text: '  Temp:      ' + data.temp + '°C' });
        output.push({ type: 'info', text: '  Humidity:  ' + data.humid + '%' });
        output.push({ type: 'info', text: '  Wind:      ' + data.wind });
        output.push({ type: 'dim', text: '  (Simulated data)' });
        return output;
    }
});

registerCommand('calendar', {
    description: 'Display a text calendar for current month',
    usage: 'calendar [month] [year]',
    handler: function(args) {
        let now = new Date();
        let month = args[0] ? parseInt(args[0]) - 1 : now.getMonth();
        let year = args[1] ? parseInt(args[1]) : now.getFullYear();
        if (isNaN(month) || month < 0 || month > 11) month = now.getMonth();
        if (isNaN(year) || year < 1) year = now.getFullYear();

        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let firstDay = new Date(year, month, 1).getDay();

        let output = [];
        output.push({ type: 'heading', text: months[month] + ' ' + year });
        output.push({ type: 'info', text: ' Su Mo Tu We Th Fr Sa' });

        let line = '   '.repeat(firstDay);
        for (let d = 1; d <= daysInMonth; d++) {
            line += String(d).padStart(3);
            if ((d + firstDay) % 7 === 0) {
                output.push({ type: 'info', text: line });
                line = '';
            }
        }
        if (line.trim()) output.push({ type: 'info', text: line });
        return output;
    }
});

registerCommand('quote', {
    description: 'Display a random quote from scientists/mathematicians',
    usage: 'quote',
    handler: function() {
        let quotes = [
            ['"Mathematics is the queen of sciences."', 'Carl Friedrich Gauss'],
            ['"E = mc² is not just a formula, it\'s a way of life."', 'Unknown Physicist'],
            ['"The laws of physics are the canvas upon which God paints."', 'Albert Einstein'],
            ['"Pure mathematics is, in its way, the poetry of logical ideas."', 'Albert Einstein'],
            ['"Nature uses only the longest threads to weave her patterns."', 'Richard Feynman'],
            ['"I think I can safely say that nobody understands quantum mechanics."', 'Richard Feynman'],
            ['"The most incomprehensible thing about the universe is that it is comprehensible."', 'Albert Einstein'],
            ['"Imagination is more important than knowledge."', 'Albert Einstein'],
            ['"God does not play dice with the universe."', 'Albert Einstein'],
            ['"If I have seen further, it is by standing on the shoulders of giants."', 'Isaac Newton'],
            ['"The important thing is not to stop questioning."', 'Albert Einstein'],
            ['"A mathematician is a device for turning coffee into theorems."', 'Paul Erdos'],
            ['"The universe is under no obligation to make sense to you."', 'Neil deGrasse Tyson'],
            ['"Mathematics is the art of giving the same name to different things."', 'Henri Poincare'],
            ['"Everything should be made as simple as possible, but not simpler."', 'Albert Einstein'],
            ['"The only way to discover the limits of the possible is to go beyond them into the impossible."', 'Arthur C. Clarke'],
            ['"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."', 'Albert Einstein'],
            ['"Equations are more important to me, because politics is for the present, but an equation is something for eternity."', 'Albert Einstein'],
            ['"Science is what we understand well enough to explain to a computer. Art is everything else."', 'Donald Knuth'],
            ['"In mathematics, you don\'t understand things. You just get used to them."', 'John von Neumann'],
            ['"The good thing about science is that it\'s true whether or not you believe in it."', 'Neil deGrasse Tyson'],
            ['"Somewhere, something incredible is waiting to be known."', 'Carl Sagan'],
            ['"We are made of star-stuff."', 'Carl Sagan'],
            ['"The nitrogen in our DNA, the calcium in our teeth, the iron in our blood were made inside stars."', 'Carl Sagan'],
            ['"Extraordinary claims require extraordinary evidence."', 'Carl Sagan'],
        ];
        let idx = Math.floor(Math.random() * quotes.length);
        return [
            { type: 'info', text: quotes[idx][0] },
            { type: 'dim', text: '  -- ' + quotes[idx][1] },
        ];
    }
});

registerCommand('story', {
    description: 'Display the historical story behind a formula',
    usage: 'story [formula name]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'story: missing formula name. Use "story [name]" or "search [term]" first to find a formula.' }];
        let query = args.join(' ');

        let mathResults = MATH.search(query);
        let physicsResults = PHYSICS.search(query);

        if (mathResults.length === 0 && physicsResults.length === 0) {
            return [{ type: 'error', text: 'story: no formula found matching "' + query + '"' }];
        }

        let output = [];
        let added = new Set();

        for (let r of mathResults) {
            if (added.has(r.name)) continue;
            added.add(r.name);
            let story = MATH.getFormulaStory(r.name);
            output.push({ type: 'heading', text: r.name });
            output.push({ type: 'dim', text: '[' + r.category + ' / ' + r.subcategory + ']' });
            output.push({ type: 'formula', text: r.expression });
            output.push({ type: 'system', text: '' });
            output.push({ type: 'story', text: story });
            output.push({ type: 'system', text: '' });
        }

        for (let r of physicsResults) {
            if (added.has(r.name)) continue;
            added.add(r.name);
            let story = PHYSICS.getFormulaStory(r.name);
            output.push({ type: 'heading', text: r.name });
            output.push({ type: 'dim', text: '[' + r.category + ' / ' + r.subcategory + ']' });
            output.push({ type: 'formula', text: r.expression });
            output.push({ type: 'system', text: '' });
            output.push({ type: 'story', text: story });
            output.push({ type: 'system', text: '' });
        }

        return output;
    }
});

registerCommand('rnd', {
    description: 'Display a random formula from any category',
    usage: 'rnd [math|physics]',
    handler: function(args) {
        let source;
        if (args[0] && args[0].toLowerCase() === 'physics') {
            source = PHYSICS;
        } else if (args[0] && args[0].toLowerCase() === 'math') {
            source = MATH;
        } else {
            source = Math.random() < 0.5 ? MATH : PHYSICS;
        }
        let all = source.getAllFormulas();
        if (all.length === 0) return [{ type: 'error', text: 'No formulas available.' }];
        let f = all[Math.floor(Math.random() * all.length)];
        return [
            { type: 'heading', text: 'Random Formula' },
            { type: 'dim', text: '[' + f.category + ' / ' + f.subcategory + ']' },
            { type: 'formula', text: f.name + ': ' + f.expression },
            { type: 'dim', text: '  ' + f.description },
        ];
    }
});

registerCommand('font', {
    description: 'Change terminal font size',
    usage: 'font [size]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'info', text: 'Current font size: 14px' }];
        let size = parseInt(args[0]);
        if (isNaN(size) || size < 8 || size > 32) return [{ type: 'error', text: 'font: invalid size. Use 8-32.' }];
        let output = document.getElementById('output');
        let input = document.getElementById('input');
        if (output) output.style.fontSize = size + 'px';
        if (input) input.style.fontSize = size + 'px';
        return [{ type: 'info', text: 'Font size set to ' + size + 'px' }];
    }
});

registerCommand('screenfetch', {
    description: 'Display system information (alternative to neofetch)',
    usage: 'screenfetch',
    handler: function() {
        let output = [];
        output.push({ type: 'system', text: '' });
        output.push({
            type: 'info',
            text: '         ___           ' + 'root@mathphys-os' +
                  '\n       _|___|_         ' + '------------------------------' +
                  '\n       |     |         ' + 'OS: MathPhys WebOS' +
                  '\n       | ___ |         ' + 'Kernel: MP-Kernel' +
                  '\n       |     |         ' + 'Shell: MP-Shell' +
                  '\n       |_____|         ' + 'Terminal: Web-Terminal' +
                  '\n   ____|_____|____     ' + 'Math Formulas: ' + MATH.getCount() +
                  '\n  |___|_____|___|      ' + 'Physics Formulas: ' + PHYSICS.getCount() +
                  '\n                      ' + 'Commands: ' + Object.keys(COMMANDS).length +
                  '\n                      ' + 'Uptime: ' + Math.floor(KERNEL.getUptime() / 1000) + 's' +
                  '\n                      ' + 'Resolution: ' + window.innerWidth + 'x' + window.innerHeight
        });
        output.push({ type: 'system', text: '' });
        return output;
    }
});

registerCommand('cowsay', {
    description: 'A cow says something formula-related',
    usage: 'cowsay [text]',
    handler: function(args) {
        let text = args.join(' ') || 'E = mc^2';
        let border = '-' + '-'.repeat(text.length + 2) + '-';
        return [
            { type: 'info', text: ' ' + border },
            { type: 'info', text: '< ' + text + ' >' },
            { type: 'info', text: ' ' + border },
            { type: 'system', text: '' },
            { type: 'info', text: '        \\   ^__^' },
            { type: 'info', text: '         \\  (oo)\\_______' },
            { type: 'info', text: '            (__)\\       )\\/\\' },
            { type: 'info', text: '                ||----w |' },
            { type: 'info', text: '                ||     ||' },
        ];
    }
});

registerCommand('roman', {
    description: 'Convert a number to Roman numerals',
    usage: 'roman [number]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'roman: missing number' }];
        let num = parseInt(args[0]);
        if (isNaN(num) || num < 1 || num > 3999) return [{ type: 'error', text: 'roman: enter a number between 1 and 3999' }];
        let vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
        let romans = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
        let result = '';
        for (let i = 0; i < vals.length; i++) {
            while (num >= vals[i]) {
                result += romans[i];
                num -= vals[i];
            }
        }
        return [{ type: 'info', text: args[0] + ' = ' + result }];
    }
});

registerCommand('binary', {
    description: 'Convert a number to binary',
    usage: 'binary [number]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'binary: missing number' }];
        let num = parseInt(args[0]);
        if (isNaN(num)) return [{ type: 'error', text: 'binary: invalid number' }];
        return [{ type: 'info', text: args[0] + ' = 0b' + num.toString(2) }];
    }
});

registerCommand('hex', {
    description: 'Convert a number to hexadecimal',
    usage: 'hex [number]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'hex: missing number' }];
        let num = parseInt(args[0]);
        if (isNaN(num)) return [{ type: 'error', text: 'hex: invalid number' }];
        return [{ type: 'info', text: args[0] + ' = 0x' + num.toString(16).toUpperCase() }];
    }
});

registerCommand('octal', {
    description: 'Convert a number to octal',
    usage: 'octal [number]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'octal: missing number' }];
        let num = parseInt(args[0]);
        if (isNaN(num)) return [{ type: 'error', text: 'octal: invalid number' }];
        return [{ type: 'info', text: args[0] + ' = 0o' + num.toString(8) }];
    }
});

registerCommand('roll', {
    description: 'Roll dice (e.g., roll 2d6)',
    usage: 'roll [NdS]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'roll: usage: roll 2d6 (roll two 6-sided dice)' }];
        let m = args[0].match(/^(\d+)d(\d+)$/i);
        if (!m) return [{ type: 'error', text: 'roll: invalid format. Use NdS, e.g., 2d6' }];
        let count = parseInt(m[1]);
        let sides = parseInt(m[2]);
        if (count < 1 || count > 100 || sides < 1 || sides > 1000) return [{ type: 'error', text: 'roll: out of range' }];
        let rolls = [];
        let total = 0;
        for (let i = 0; i < count; i++) {
            let r = Math.floor(Math.random() * sides) + 1;
            rolls.push(r);
            total += r;
        }
        let output = [];
        output.push({ type: 'info', text: 'Rolling ' + args[0] + '...' });
        output.push({ type: 'info', text: '  Results: ' + rolls.join(', ') });
        if (count > 1) output.push({ type: 'info', text: '  Total:   ' + total });
        return output;
    }
});

registerCommand('timer', {
    description: 'Start/stop/check a simple timer',
    usage: 'timer [start|stop|check]',
    handler: function(args) {
        if (!window._timer) window._timer = { running: false, startTime: 0, elapsed: 0 };
        let t = window._timer;
        if (!args[0] || args[0] === 'check') {
            if (!t.running) return [{ type: 'info', text: 'Timer stopped. Elapsed: ' + t.elapsed.toFixed(1) + 's' }];
            let e = (Date.now() - t.startTime) / 1000 + t.elapsed;
            return [{ type: 'info', text: 'Timer running: ' + e.toFixed(1) + 's' }];
        }
        if (args[0] === 'start') {
            if (t.running) return [{ type: 'warning', text: 'Timer already running. Use "timer stop" first.' }];
            t.running = true;
            t.startTime = Date.now();
            return [{ type: 'info', text: 'Timer started.' }];
        }
        if (args[0] === 'stop') {
            if (!t.running) return [{ type: 'warning', text: 'Timer not running.' }];
            t.elapsed += (Date.now() - t.startTime) / 1000;
            t.running = false;
            return [{ type: 'info', text: 'Timer stopped. Elapsed: ' + t.elapsed.toFixed(1) + 's' }];
        }
        return [{ type: 'error', text: 'Usage: timer [start|stop|check]' }];
    }
});

registerCommand('touch', {
    description: 'Create empty file or update file timestamp',
    usage: 'touch [file]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'touch: missing file operand' }];
        try {
            if (FS.exists(args[0])) {
                return [{ type: 'system', text: '' }];
            }
            FS.writeFile(args[0], '');
            return [{ type: 'system', text: '' }];
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('rmdir', {
    description: 'Remove empty directories',
    usage: 'rmdir [directory]',
    handler: function(args) {
        if (!args[0]) return [{ type: 'error', text: 'rmdir: missing operand' }];
        try {
            FS.rmdir(args[0]);
            return [{ type: 'system', text: '' }];
        } catch(e) {
            return [{ type: 'error', text: e.message }];
        }
    }
});

registerCommand('clear', {
    description: 'Clear the terminal screen',
    usage: 'clear',
    handler: function() {
        return { type: 'clear' };
    }
});

registerCommand('update-help', {
    description: 'Update the help command list to include all new commands',
    usage: 'update-help',
    handler: function() {
        let cmdList = Object.keys(COMMANDS).sort();
        let helpText = '';
        for (let cmd of cmdList) {
            helpText += cmd + ' - ' + (COMMANDS[cmd].description || 'No description') + '\n';
        }
        FS.writeFile('/usr/share/doc/commands.txt', helpText);
        return [{ type: 'info', text: 'Help database updated with ' + cmdList.length + ' commands.' }];
    }
});

registerCommand('help', {
    description: 'Display help information for all commands',
    usage: 'help [command]',
    handler: function(args) {
        if (args[0]) {
            let cmd = args[0].toLowerCase();
            if (COMMANDS[cmd]) {
                let output = [];
                output.push({ type: 'heading', text: 'Command: ' + cmd });
                output.push({ type: 'info', text: '  ' + (COMMANDS[cmd].description || 'No description') });
                output.push({ type: 'info', text: '  Usage: ' + (COMMANDS[cmd].usage || cmd) });
                return output;
            }
            return [{ type: 'error', text: 'help: no such command "' + cmd + '"' }];
        }
        let output = [];
        output.push({ type: 'heading', text: 'MathPhys WebOS - All Commands (' + Object.keys(COMMANDS).length + ' total)' });
        output.push({ type: 'dim', text: 'Type "help [command]" for detailed info about any command below.' });
        output.push({ type: 'system', text: '' });

        let groups = {
            'MATHEMATICS': ['algebra', 'geometry', 'calculus', 'trig', 'linear-algebra', 'number-theory', 'probability', 'set-theory', 'combinatorics', 'topology', 'differential-equations', 'measure-theory', 'tensors', 'optimization', 'discrete', 'all-math'],
            'PHYSICS': ['mechanics', 'thermo', 'electromag', 'optics', 'quantum', 'relativity', 'nuclear', 'fluid-mechanics', 'solid-state', 'astrophysics', 'acoustics', 'plasma', 'all-physics'],
            'FORMULA TOOLS': ['formulas', 'search', 'story', 'rnd', 'head', 'tail', 'sort', 'wc', 'grep', 'nl', 'diff', 'uniq'],
            'FILE SYSTEM': ['ls', 'cd', 'pwd', 'cat', 'read', 'more', 'touch', 'mkdir', 'rm', 'rmdir', 'cp', 'mv', 'tree', 'df', 'du'],
            'SYSTEM': ['help', 'doc', 'man', 'clear', 'neofetch', 'screenfetch', 'uname', 'uptime', 'date', 'timer', 'clock', 'whoami', 'env', 'history', 'top', 'ps', 'dmesg', 'hostname'],
            'NETWORK': ['ping', 'ifconfig', 'ip', 'route', 'curl', 'wget', 'ssh'],
            'CALC & CONVERT': ['calc', 'bc', 'dc', 'expr', 'test', 'binary', 'hex', 'octal', 'roman', 'convert', 'constants', 'units'],
            'PRODUCTIVITY': ['todo', 'notes', 'calendar', 'weather', 'quote', 'fortune', 'roll'],
            'TEXT UTILS': ['echo', 'printf', 'cat', 'sort', 'tr', 'rev', 'shuf', 'expand', 'fold', 'sed'],
            'FUN': ['cowsay', 'banner', 'figlet', 'cmatrix', 'lolcat', 'fortune'],
            'DEVICES': ['lsblk', 'lspci', 'lsusb', 'nproc', 'free', 'lspci'],
            'USER & PERMS': ['who', 'w', 'id', 'groups', 'su', 'chmod', 'useradd', 'passwd', 'sudo'],
            'PACKAGE MGMT': ['apt', 'dnf', 'pacman', 'brew', 'git'],
            'PROCESSES': ['kill', 'ps', 'bg', 'fg', 'jobs', 'nohup', 'nice', 'renice', 'time', 'watch'],
            'MISC': ['export', 'alias', 'source', 'update-help', 'shutdown', 'reboot', 'exit', 'logout', 'font'],
        };

        for (let group in groups) {
            let cmds = groups[group].filter(c => COMMANDS[c]);
            if (cmds.length === 0) continue;
            output.push({ type: 'subheading', text: '--- ' + group + ' ---' });
            for (let c of cmds) {
                let desc = COMMANDS[c].description || '';
                if (desc.length > 60) desc = desc.substring(0, 57) + '...';
                output.push({ type: 'dim', text: '  ' + c.padEnd(22) + desc });
            }
            output.push({ type: 'system', text: '' });
        }

        let mc = MATH ? MATH.getCount() : 0;
        let pc = PHYSICS ? PHYSICS.getCount() : 0;
        output.push({ type: 'dim', text: 'Total: ' + Object.keys(COMMANDS).length + ' commands | ' + mc + ' math formulas | ' + pc + ' physics formulas' });
        output.push({ type: 'system', text: 'Tip: Use "help [command]" for details. Use "story [formula]" for a formula\'s history.' });
        return output;
    }
});

// Resolve duplicate command keys
delete COMMANDS.yes;
registerCommand('yes', {
    description: 'Output a string repeatedly until killed',
    usage: 'yes [string]',
    handler: function(args) {
        let str = args.join(' ') || 'y';
        let lines = [];
        for (let i = 0; i < 20; i++) lines.push({ type: 'info', text: str });
        return lines;
    }
});

// Clean up duplicate function refs
delete COMMANDS.help_builtin;
delete COMMANDS.echo_builtin;
delete COMMANDS.export_variable;
delete COMMANDS.evals;

window.COMMANDS = COMMANDS;
