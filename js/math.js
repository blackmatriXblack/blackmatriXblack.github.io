const MATH = {
    categories: {
        'algebra': {
            name: 'Algebra',
            description: 'Fundamental algebraic formulas and identities',
            subcategories: {
                'basic': {
                    name: 'Basic Algebra',
                    formulas: [
                        { name: 'Quadratic Formula', expression: 'x = (-b ± √(b² - 4ac)) / 2a', description: 'Solutions to ax² + bx + c = 0' },
                        { name: 'Difference of Squares', expression: 'a² - b² = (a+b)(a-b)', description: 'Factoring difference of squares' },
                        { name: 'Sum of Squares', expression: 'a² + b² = (a+bi)(a-bi)', description: 'Complex factorization' },
                        { name: 'Sum of Cubes', expression: 'a³ + b³ = (a+b)(a² - ab + b²)', description: 'Factoring sum of cubes' },
                        { name: 'Difference of Cubes', expression: 'a³ - b³ = (a-b)(a² + ab + b²)', description: 'Factoring difference of cubes' },
                        { name: 'Square of Sum', expression: '(a+b)² = a² + 2ab + b²', description: 'Binomial square expansion' },
                        { name: 'Square of Difference', expression: '(a-b)² = a² - 2ab + b²', description: 'Binomial square expansion' },
                        { name: 'Cube of Sum', expression: '(a+b)³ = a³ + 3a²b + 3ab² + b³', description: 'Binomial cube expansion' },
                        { name: 'Cube of Difference', expression: '(a-b)³ = a³ - 3a²b + 3ab² - b³', description: 'Binomial cube expansion' },
                        { name: 'nth Power Sum', expression: '(a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ', description: 'Binomial theorem for k=0 to n' },
                        { name: 'General Binomial', expression: '(1+x)ⁿ = 1 + nx + n(n-1)x²/2! + ...', description: 'Infinite binomial series' },
                        { name: 'Completing the Square', expression: 'ax² + bx + c = a(x + b/2a)² + (c - b²/4a)', description: 'Quadratic completion form' },
                        { name: 'Rational Root', expression: 'If p/q is a root of aₙxⁿ+...+a₀, then p|a₀ and q|aₙ', description: 'Rational root theorem' },
                        { name: 'Vieta Sum', expression: 'x₁ + x₂ + ... + xₙ = -aₙ₋₁/aₙ', description: 'Sum of roots of polynomial' },
                        { name: 'Vieta Product', expression: 'x₁·x₂·...·xₙ = (-1)ⁿ·a₀/aₙ', description: 'Product of roots of polynomial' },
                    ]
                },
                'exponential': {
                    name: 'Exponents & Logarithms',
                    formulas: [
                        { name: 'Product Rule', expression: 'a^m · a^n = a^(m+n)', description: 'Multiplication of like bases' },
                        { name: 'Quotient Rule', expression: 'a^m / a^n = a^(m-n)', description: 'Division of like bases' },
                        { name: 'Power Rule', expression: '(a^m)^n = a^(mn)', description: 'Power of a power' },
                        { name: 'Product Power', expression: '(ab)^n = a^n · b^n', description: 'Power of a product' },
                        { name: 'Quotient Power', expression: '(a/b)^n = a^n / b^n', description: 'Power of a quotient' },
                        { name: 'Zero Exponent', expression: 'a^0 = 1, a ≠ 0', description: 'Zero exponent rule' },
                        { name: 'Negative Exponent', expression: 'a^(-n) = 1/(a^n)', description: 'Negative exponent rule' },
                        { name: 'Fractional Exponent', expression: 'a^(m/n) = ⁿ√(a^m)', description: 'Rational exponent definition' },
                        { name: 'Log Product', expression: 'log_b(xy) = log_b(x) + log_b(y)', description: 'Logarithm product rule' },
                        { name: 'Log Quotient', expression: 'log_b(x/y) = log_b(x) - log_b(y)', description: 'Logarithm quotient rule' },
                        { name: 'Log Power', expression: 'log_b(x^p) = p · log_b(x)', description: 'Logarithm power rule' },
                        { name: 'Change of Base', expression: 'log_b(x) = log_k(x) / log_k(b)', description: 'Logarithm base conversion' },
                        { name: 'Natural Log', expression: 'ln(x) = log_e(x)', description: 'Natural logarithm definition' },
                        { name: 'Exponential Function', expression: 'exp(x) = e^x = Σ x^n/n!', description: 'Exponential series for n=0 to ∞' },
                        { name: 'Log Inequality', expression: 'ln(1+x) ≤ x for x > -1', description: 'Logarithmic inequality' },
                        { name: 'Euler Identity', expression: 'e^(iπ) + 1 = 0', description: 'Euler\'s identity' },
                    ]
                },
                'complex': {
                    name: 'Complex Numbers',
                    formulas: [
                        { name: 'Complex Definition', expression: 'z = a + bi, i² = -1', description: 'Complex number form' },
                        { name: 'Euler Formula', expression: 'e^(iθ) = cos θ + i sin θ', description: 'Euler formula for complex exponentials' },
                        { name: 'de Moivre', expression: '(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)', description: 'De Moivre theorem' },
                        { name: 'Complex Conjugate', expression: 'z̅ = a - bi', description: 'Complex conjugate definition' },
                        { name: 'Modulus', expression: '|z| = √(a² + b²)', description: 'Complex modulus/absolute value' },
                        { name: 'Argument', expression: 'arg(z) = arctan(b/a)', description: 'Complex argument/angle' },
                        { name: 'Polar Form', expression: 'z = r(cos θ + i sin θ)', description: 'Polar representation' },
                        { name: 'Exponential Form', expression: 'z = r·e^(iθ)', description: 'Exponential representation' },
                        { name: 'Multiplication', expression: 'z₁·z₂ = r₁r₂·e^(i(θ₁+θ₂))', description: 'Complex multiplication in polar' },
                        { name: 'Division', expression: 'z₁/z₂ = (r₁/r₂)·e^(i(θ₁-θ₂))', description: 'Complex division in polar' },
                        { name: 'nth Roots', expression: 'z^(1/n) = r^(1/n)·e^(i(θ+2πk)/n)', description: 'Complex nth roots, k=0..n-1' },
                        { name: 'Cauchy-Riemann', expression: '∂u/∂x = ∂v/∂y, ∂u/∂y = -∂v/∂x', description: 'Analytic function conditions' },
                        { name: 'Cauchy Integral', expression: 'f(a) = 1/(2πi) ∮ f(z)/(z-a) dz', description: 'Cauchy integral formula' },
                        { name: 'Residue Theorem', expression: '∮ f(z) dz = 2πi · Σ Res(f, z_k)', description: 'Contour integration via residues' },
                    ]
                }
            }
        },
        'geometry': {
            name: 'Geometry',
            description: 'Geometric formulas for shapes, areas, and volumes',
            subcategories: {
                'planar': {
                    name: 'Planar Geometry',
                    formulas: [
                        { name: 'Triangle Area', expression: 'A = (1/2) · b · h', description: 'Area with base and height' },
                        { name: 'Triangle Area (Heron)', expression: 'A = √(s(s-a)(s-b)(s-c)), s = (a+b+c)/2', description: 'Heron formula for triangle area' },
                        { name: 'Triangle Area (SAS)', expression: 'A = (1/2)ab·sin(C)', description: 'Area using two sides and included angle' },
                        { name: 'Pythagorean Theorem', expression: 'a² + b² = c²', description: 'Right triangle relation' },
                        { name: 'Law of Sines', expression: 'a/sin(A) = b/sin(B) = c/sin(C) = 2R', description: 'Triangle side-sine relation' },
                        { name: 'Law of Cosines', expression: 'c² = a² + b² - 2ab·cos(C)', description: 'Generalized Pythagorean theorem' },
                        { name: 'Law of Tangents', expression: '(a-b)/(a+b) = tan((A-B)/2)/tan((A+B)/2)', description: 'Triangle tangent relation' },
                        { name: 'Circle Area', expression: 'A = πr²', description: 'Area of a circle' },
                        { name: 'Circle Circumference', expression: 'C = 2πr', description: 'Circumference of a circle' },
                        { name: 'Sector Area', expression: 'A = (1/2)r²θ', description: 'Circular sector area (θ in radians)' },
                        { name: 'Arc Length', expression: 's = rθ', description: 'Arc length (θ in radians)' },
                        { name: 'Rectangle Area', expression: 'A = l · w', description: 'Area of a rectangle' },
                        { name: 'Parallelogram Area', expression: 'A = b · h', description: 'Area of a parallelogram' },
                        { name: 'Trapezoid Area', expression: 'A = (1/2)(a+b)h', description: 'Area of a trapezoid' },
                        { name: 'Rhombus Area', expression: 'A = (1/2)·d₁·d₂', description: 'Area using diagonals' },
                        { name: 'Regular Polygon Area', expression: 'A = (1/4)ns²·cot(π/n)', description: 'Area of n-sided polygon' },
                        { name: 'Ellipse Area', expression: 'A = πab', description: 'Area of an ellipse' },
                        { name: 'Ellipse Circumference', expression: 'C ≈ 2π√((a²+b²)/2)', description: 'Approximate ellipse circumference' },
                        { name: 'Distance Formula', expression: 'd = √((x₂-x₁)²+(y₂-y₁)²)', description: '2D distance between points' },
                        { name: 'Midpoint Formula', expression: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)', description: 'Midpoint of a segment' },
                        { name: 'Slope Formula', expression: 'm = (y₂-y₁)/(x₂-x₁)', description: 'Slope of a line' },
                        { name: 'Point-Slope Line', expression: 'y - y₁ = m(x - x₁)', description: 'Line from point and slope' },
                        { name: 'Circle Equation', expression: '(x-h)² + (y-k)² = r²', description: 'Circle centered at (h,k)' },
                        { name: 'Parabola Equation', expression: 'y = ax² + bx + c', description: 'Standard parabola' },
                        { name: 'Vertex Form', expression: 'y = a(x-h)² + k', description: 'Parabola vertex form' },
                        { name: 'Ellipse Equation', expression: '(x-h)²/a² + (y-k)²/b² = 1', description: 'Standard ellipse equation' },
                        { name: 'Hyperbola Equation', expression: '(x-h)²/a² - (y-k)²/b² = 1', description: 'Standard hyperbola equation' },
                        { name: 'Menelaus Theorem', expression: '(AF/FB)·(BD/DC)·(CE/EA) = 1', description: 'Collinearity condition on triangle' },
                        { name: 'Ceva Theorem', expression: '(AF/FB)·(BD/DC)·(CE/EA) = 1', description: 'Concurrency condition on triangle' },
                        { name: 'Stewart Theorem', expression: 'man + dad = bmb + cnc', description: 'Triangle cevian length relation' },
                        { name: 'Apollonius Theorem', expression: 'b² + c² = 2(m² + a²/4)', description: 'Median length formula' },
                    ]
                },
                'solid': {
                    name: 'Solid Geometry',
                    formulas: [
                        { name: 'Cube Volume', expression: 'V = a³', description: 'Volume of a cube' },
                        { name: 'Cube Area', expression: 'A = 6a²', description: 'Surface area of a cube' },
                        { name: 'Rectangular Prism Volume', expression: 'V = lwh', description: 'Volume of a rectangular prism' },
                        { name: 'Sphere Volume', expression: 'V = (4/3)πr³', description: 'Volume of a sphere' },
                        { name: 'Sphere Area', expression: 'A = 4πr²', description: 'Surface area of a sphere' },
                        { name: 'Cylinder Volume', expression: 'V = πr²h', description: 'Volume of a cylinder' },
                        { name: 'Cylinder Area', expression: 'A = 2πr² + 2πrh', description: 'Surface area of a cylinder' },
                        { name: 'Cone Volume', expression: 'V = (1/3)πr²h', description: 'Volume of a cone' },
                        { name: 'Cone Area', expression: 'A = πr² + πrl', description: 'Surface area (l = slant height)' },
                        { name: 'Pyramid Volume', expression: 'V = (1/3)Bh', description: 'Volume (B = base area)' },
                        { name: 'Torus Volume', expression: 'V = 2π²Rr²', description: 'Volume of a torus' },
                        { name: 'Torus Area', expression: 'A = 4π²Rr', description: 'Surface area of a torus' },
                        { name: 'Spherical Cap Volume', expression: 'V = (πh²/3)(3R-h)', description: 'Volume of spherical cap' },
                        { name: 'Frustum Volume', expression: 'V = (πh/3)(R² + Rr + r²)', description: 'Volume of conical frustum' },
                        { name: 'Ellipsoid Volume', expression: 'V = (4/3)πabc', description: 'Volume of an ellipsoid' },
                        { name: 'Prism Volume', expression: 'V = Bh', description: 'Volume (B = base area)' },
                        { name: 'Euler Polyhedron', expression: 'V - E + F = 2', description: 'Euler characteristic for polyhedra' },
                    ]
                },
                'trig': {
                    name: 'Trigonometry',
                    formulas: [
                        { name: 'Sine', expression: 'sin θ = opposite/hypotenuse', description: 'Sine ratio' },
                        { name: 'Cosine', expression: 'cos θ = adjacent/hypotenuse', description: 'Cosine ratio' },
                        { name: 'Tangent', expression: 'tan θ = opposite/adjacent', description: 'Tangent ratio' },
                        { name: 'Cosecant', expression: 'csc θ = 1/sin θ', description: 'Cosecant definition' },
                        { name: 'Secant', expression: 'sec θ = 1/cos θ', description: 'Secant definition' },
                        { name: 'Cotangent', expression: 'cot θ = 1/tan θ', description: 'Cotangent definition' },
                        { name: 'Pythagorean Identity', expression: 'sin²θ + cos²θ = 1', description: 'Fundamental trig identity' },
                        { name: 'Pythagorean Sec/Tan', expression: 'tan²θ + 1 = sec²θ', description: 'Secant-tangent identity' },
                        { name: 'Pythagorean Cot/Csc', expression: 'cot²θ + 1 = csc²θ', description: 'Cosecant-cotangent identity' },
                        { name: 'Sin Sum', expression: 'sin(A+B) = sin A cos B + cos A sin B', description: 'Sine addition formula' },
                        { name: 'Sin Difference', expression: 'sin(A-B) = sin A cos B - cos A sin B', description: 'Sine subtraction formula' },
                        { name: 'Cos Sum', expression: 'cos(A+B) = cos A cos B - sin A sin B', description: 'Cosine addition formula' },
                        { name: 'Cos Difference', expression: 'cos(A-B) = cos A cos B + sin A sin B', description: 'Cosine subtraction formula' },
                        { name: 'Tan Sum', expression: 'tan(A+B) = (tan A + tan B)/(1 - tan A tan B)', description: 'Tangent addition formula' },
                        { name: 'Double Angle Sin', expression: 'sin(2θ) = 2 sin θ cos θ', description: 'Double angle for sine' },
                        { name: 'Double Angle Cos', expression: 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ', description: 'Double angle for cosine' },
                        { name: 'Double Angle Tan', expression: 'tan(2θ) = 2 tan θ/(1 - tan²θ)', description: 'Double angle for tangent' },
                        { name: 'Triple Angle Sin', expression: 'sin(3θ) = 3 sin θ - 4 sin³θ', description: 'Triple angle for sine' },
                        { name: 'Triple Angle Cos', expression: 'cos(3θ) = 4 cos³θ - 3 cos θ', description: 'Triple angle for cosine' },
                        { name: 'Half Angle Sin', expression: 'sin(θ/2) = ±√((1-cos θ)/2)', description: 'Half angle for sine' },
                        { name: 'Half Angle Cos', expression: 'cos(θ/2) = ±√((1+cos θ)/2)', description: 'Half angle for cosine' },
                        { name: 'Half Angle Tan', expression: 'tan(θ/2) = sin θ/(1+cos θ) = (1-cos θ)/sin θ', description: 'Half angle for tangent' },
                        { name: 'Sum to Product Sin', expression: 'sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)', description: 'Sum-to-product identity' },
                        { name: 'Sum to Product Cos', expression: 'cos A + cos B = 2 cos((A+B)/2) cos((A-B)/2)', description: 'Sum-to-product identity' },
                        { name: 'Product to Sum Sin', expression: 'sin A sin B = (cos(A-B) - cos(A+B))/2', description: 'Product-to-sum identity' },
                        { name: 'Product to Sum Cos', expression: 'cos A cos B = (cos(A-B) + cos(A+B))/2', description: 'Product-to-sum identity' },
                        { name: 'Product Sin Cos', expression: 'sin A cos B = (sin(A+B) + sin(A-B))/2', description: 'Product-to-sum identity' },
                        { name: 'Sin² Identity', expression: 'sin²θ = (1 - cos(2θ))/2', description: 'Power reduction for sine' },
                        { name: 'Cos² Identity', expression: 'cos²θ = (1 + cos(2θ))/2', description: 'Power reduction for cosine' },
                        { name: 'Sin³ Identity', expression: 'sin³θ = (3 sin θ - sin(3θ))/4', description: 'Power reduction for sine' },
                        { name: 'Cos³ Identity', expression: 'cos³θ = (3 cos θ + cos(3θ))/4', description: 'Power reduction for cosine' },
                        { name: 'Euler Sine', expression: 'sin θ = (e^(iθ) - e^(-iθ))/(2i)', description: 'Euler representation of sine' },
                        { name: 'Euler Cosine', expression: 'cos θ = (e^(iθ) + e^(-iθ))/2', description: 'Euler representation of cosine' },
                        { name: 'Law of Sines', expression: 'a/sin A = b/sin B = c/sin C = 2R', description: 'Triangle law of sines' },
                        { name: 'Law of Cosines', expression: 'c² = a² + b² - 2ab cos C', description: 'Triangle law of cosines' },
                        { name: 'Arcsin Derivative', expression: 'd/dx arcsin x = 1/√(1-x²)', description: 'Derivative of inverse sine' },
                        { name: 'Arccos Derivative', expression: 'd/dx arccos x = -1/√(1-x²)', description: 'Derivative of inverse cosine' },
                        { name: 'Arctan Derivative', expression: 'd/dx arctan x = 1/(1+x²)', description: 'Derivative of inverse tangent' },
                        { name: 'Sin Integral', expression: '∫ sin x dx = -cos x + C', description: 'Integral of sine' },
                        { name: 'Cos Integral', expression: '∫ cos x dx = sin x + C', description: 'Integral of cosine' },
                        { name: 'Tan Integral', expression: '∫ tan x dx = -ln|cos x| + C', description: 'Integral of tangent' },
                        { name: 'Csc Integral', expression: '∫ csc x dx = -ln|csc x + cot x| + C', description: 'Integral of cosecant' },
                        { name: 'Sec Integral', expression: '∫ sec x dx = ln|sec x + tan x| + C', description: 'Integral of secant' },
                        { name: 'Cot Integral', expression: '∫ cot x dx = ln|sin x| + C', description: 'Integral of cotangent' },
                    ]
                },
                'analytic': {
                    name: 'Analytic Geometry',
                    formulas: [
                        { name: 'Line Distance', expression: '|Ax₀+By₀+C|/√(A²+B²)', description: 'Distance from point to line' },
                        { name: 'Line Intersection', expression: '(x,y) solving a₁x+b₁y=c₁ and a₂x+b₂y=c₂', description: 'Intersection of two lines' },
                        { name: 'Angle Between Lines', expression: 'tan θ = |(m₂-m₁)/(1+m₁m₂)|', description: 'Angle between two lines' },
                        { name: 'Parallel Lines', expression: 'm₁ = m₂', description: 'Parallel line condition' },
                        { name: 'Perpendicular Lines', expression: 'm₁·m₂ = -1', description: 'Perpendicular line condition' },
                        { name: '3D Distance', expression: 'd = √((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)', description: '3D distance between points' },
                        { name: '3D Midpoint', expression: 'M = ((x₁+x₂)/2,(y₁+y₂)/2,(z₁+z₂)/2)', description: '3D midpoint formula' },
                        { name: 'Direction Cosines', expression: 'cos α = x/r, cos β = y/r, cos γ = z/r', description: 'Line direction in 3D' },
                        { name: 'Plane Equation', expression: 'a(x-x₀)+b(y-y₀)+c(z-z₀)=0', description: 'Equation of a plane' },
                        { name: 'Plane Distance', expression: '|ax₀+by₀+cz₀+d|/√(a²+b²+c²)', description: 'Point to plane distance' },
                        { name: 'Sphere Equation', expression: '(x-a)²+(y-b)²+(z-c)² = r²', description: 'Equation of a sphere' },
                        { name: 'Cylinder Equation', expression: 'x² + y² = r²', description: 'Equation of a cylinder' },
                    ]
                }
            }
        },
        'calculus': {
            name: 'Calculus',
            description: 'Differential and integral calculus formulas',
            subcategories: {
                'limits': {
                    name: 'Limits',
                    formulas: [
                        { name: 'Limit Definition', expression: 'lim_{x→a} f(x) = L', description: 'Formal limit definition' },
                        { name: 'Sum Limit', expression: 'lim(f+g) = lim f + lim g', description: 'Limit of sum' },
                        { name: 'Product Limit', expression: 'lim(f·g) = lim f · lim g', description: 'Limit of product' },
                        { name: 'Quotient Limit', expression: 'lim(f/g) = lim f / lim g', description: 'Limit of quotient' },
                        { name: 'Constant Multiple', expression: 'lim(cf) = c·lim f', description: 'Limit of constant multiple' },
                        { name: 'Squeeze Theorem', expression: 'If g ≤ f ≤ h and lim g = lim h = L, then lim f = L', description: 'Squeeze/sandwich theorem' },
                        { name: 'L\'Hopital Rule', expression: 'lim f/g = lim f\'/g\' (0/0 or ∞/∞)', description: 'Indeterminate form resolution' },
                        { name: 'Sin x / x', expression: 'lim_{x→0} sin x / x = 1', description: 'Fundamental trig limit' },
                        { name: '1 - cos x / x', expression: 'lim_{x→0} (1-cos x)/x = 0', description: 'Trig limit' },
                        { name: '(1+1/n)^n', expression: 'lim_{n→∞} (1+1/n)^n = e', description: 'Euler number limit definition' },
                        { name: 'ln(1+x)/x', expression: 'lim_{x→0} ln(1+x)/x = 1', description: 'Logarithmic limit' },
                        { name: '(e^x-1)/x', expression: 'lim_{x→0} (e^x-1)/x = 1', description: 'Exponential limit' },
                    ]
                },
                'derivatives': {
                    name: 'Derivatives',
                    formulas: [
                        { name: 'Derivative Definition', expression: 'f\'(x) = lim_{h→0} (f(x+h)-f(x))/h', description: 'Definition of derivative' },
                        { name: 'Constant Rule', expression: 'd/dx(c) = 0', description: 'Derivative of constant' },
                        { name: 'Power Rule', expression: 'd/dx(xⁿ) = n·xⁿ⁻¹', description: 'Derivative of power function' },
                        { name: 'Constant Multiple Rule', expression: 'd/dx(cf) = c·f\'', description: 'Derivative of constant multiple' },
                        { name: 'Sum Rule', expression: 'd/dx(f+g) = f\' + g\'', description: 'Derivative of sum' },
                        { name: 'Product Rule', expression: 'd/dx(f·g) = f\'g + fg\'', description: 'Derivative of product' },
                        { name: 'Quotient Rule', expression: 'd/dx(f/g) = (f\'g - fg\')/g²', description: 'Derivative of quotient' },
                        { name: 'Chain Rule', expression: 'd/dx(f(g(x))) = f\'(g(x))·g\'(x)', description: 'Derivative of composite function' },
                        { name: 'Exponential Derivative', expression: 'd/dx(e^x) = e^x', description: 'Derivative of exponential' },
                        { name: 'Exponential Base a', expression: 'd/dx(a^x) = a^x·ln a', description: 'Derivative of a^x' },
                        { name: 'Natural Log Derivative', expression: 'd/dx(ln x) = 1/x', description: 'Derivative of natural log' },
                        { name: 'Log Base a', expression: 'd/dx(log_a x) = 1/(x ln a)', description: 'Derivative of log base a' },
                        { name: 'Sin Derivative', expression: 'd/dx(sin x) = cos x', description: 'Derivative of sine' },
                        { name: 'Cos Derivative', expression: 'd/dx(cos x) = -sin x', description: 'Derivative of cosine' },
                        { name: 'Tan Derivative', expression: 'd/dx(tan x) = sec²x', description: 'Derivative of tangent' },
                        { name: 'Cot Derivative', expression: 'd/dx(cot x) = -csc²x', description: 'Derivative of cotangent' },
                        { name: 'Sec Derivative', expression: 'd/dx(sec x) = sec x tan x', description: 'Derivative of secant' },
                        { name: 'Csc Derivative', expression: 'd/dx(csc x) = -csc x cot x', description: 'Derivative of cosecant' },
                        { name: 'Arcsin Derivative', expression: 'd/dx(arcsin x) = 1/√(1-x²)', description: 'Derivative of inverse sine' },
                        { name: 'Arccos Derivative', expression: 'd/dx(arccos x) = -1/√(1-x²)', description: 'Derivative of inverse cosine' },
                        { name: 'Arctan Derivative', expression: 'd/dx(arctan x) = 1/(1+x²)', description: 'Derivative of inverse tangent' },
                        { name: 'Sinh Derivative', expression: 'd/dx(sinh x) = cosh x', description: 'Derivative of hyperbolic sine' },
                        { name: 'Cosh Derivative', expression: 'd/dx(cosh x) = sinh x', description: 'Derivative of hyperbolic cosine' },
                        { name: 'Tanh Derivative', expression: 'd/dx(tanh x) = sech²x', description: 'Derivative of hyperbolic tangent' },
                        { name: 'Logarithmic Derivative', expression: 'd/dx(ln|f|) = f\'/f', description: 'Logarithmic differentiation' },
                        { name: 'Implicit Derivative', expression: 'F(x,y)=0 ⇒ dy/dx = -∂F/∂x / ∂F/∂y', description: 'Implicit differentiation' },
                        { name: 'Parametric Derivative', expression: 'dy/dx = (dy/dt)/(dx/dt)', description: 'Derivative of parametric curve' },
                        { name: 'nth Derivative', expression: 'f^(n)(x) = dⁿf/dxⁿ', description: 'Higher order derivative' },
                        { name: 'Leibniz Rule', expression: '(fg)^(n) = Σ C(n,k) f^(k)g^(n-k)', description: 'nth derivative of product, k=0..n' },
                        { name: 'Mean Value Theorem', expression: 'f\'(c) = (f(b)-f(a))/(b-a)', description: 'Mean value theorem for derivatives' },
                        { name: 'Rolle Theorem', expression: 'If f(a)=f(b), ∃c: f\'(c)=0', description: 'Rolle theorem' },
                    ]
                },
                'integrals': {
                    name: 'Integrals',
                    formulas: [
                        { name: 'Indefinite Integral', expression: '∫ f(x) dx = F(x) + C', description: 'Definition of indefinite integral' },
                        { name: 'Definite Integral', expression: '∫_a^b f(x) dx = F(b)-F(a)', description: 'Fundamental theorem part 2' },
                        { name: 'FTC Part 1', expression: 'd/dx ∫_a^x f(t) dt = f(x)', description: 'Fundamental theorem part 1' },
                        { name: 'Power Rule Integral', expression: '∫ xⁿ dx = xⁿ⁺¹/(n+1) + C, n≠-1', description: 'Integral of power function' },
                        { name: '1/x Integral', expression: '∫ (1/x) dx = ln|x| + C', description: 'Integral of 1/x' },
                        { name: 'Exponential Integral', expression: '∫ e^x dx = e^x + C', description: 'Integral of exponential' },
                        { name: 'a^x Integral', expression: '∫ a^x dx = a^x/ln a + C', description: 'Integral of a^x' },
                        { name: 'Sin Integral', expression: '∫ sin x dx = -cos x + C', description: 'Integral of sine' },
                        { name: 'Cos Integral', expression: '∫ cos x dx = sin x + C', description: 'Integral of cosine' },
                        { name: 'Tan Integral', expression: '∫ tan x dx = -ln|cos x| + C', description: 'Integral of tangent' },
                        { name: 'Cot Integral', expression: '∫ cot x dx = ln|sin x| + C', description: 'Integral of cotangent' },
                        { name: 'Sec Integral', expression: '∫ sec x dx = ln|sec x + tan x| + C', description: 'Integral of secant' },
                        { name: 'Csc Integral', expression: '∫ csc x dx = -ln|csc x + cot x| + C', description: 'Integral of cosecant' },
                        { name: 'Sec² Integral', expression: '∫ sec²x dx = tan x + C', description: 'Integral of sec²' },
                        { name: 'Csc² Integral', expression: '∫ csc²x dx = -cot x + C', description: 'Integral of csc²' },
                        { name: 'Sec Tan Integral', expression: '∫ sec x tan x dx = sec x + C', description: 'Integral of sec·tan' },
                        { name: 'Csc Cot Integral', expression: '∫ csc x cot x dx = -csc x + C', description: 'Integral of csc·cot' },
                        { name: '1/√(1-x²) Integral', expression: '∫ 1/√(1-x²) dx = arcsin x + C', description: 'Integral leading to arcsin' },
                        { name: '1/(1+x²) Integral', expression: '∫ 1/(1+x²) dx = arctan x + C', description: 'Integral leading to arctan' },
                        { name: '1/(a²+x²) Integral', expression: '∫ 1/(a²+x²) dx = (1/a) arctan(x/a) + C', description: 'Integral leading to arctan' },
                        { name: '1/√(a²-x²) Integral', expression: '∫ 1/√(a²-x²) dx = arcsin(x/a) + C', description: 'Integral leading to arcsin' },
                        { name: 'Sinh Integral', expression: '∫ sinh x dx = cosh x + C', description: 'Integral of hyperbolic sine' },
                        { name: 'Cosh Integral', expression: '∫ cosh x dx = sinh x + C', description: 'Integral of hyperbolic cosine' },
                        { name: 'Tanh Integral', expression: '∫ tanh x dx = ln(cosh x) + C', description: 'Integral of hyperbolic tangent' },
                        { name: 'Integration by Parts', expression: '∫ u dv = uv - ∫ v du', description: 'Integration by parts formula' },
                        { name: 'U-Substitution', expression: '∫ f(g(x))g\'(x) dx = ∫ f(u) du', description: 'Integration by substitution' },
                        { name: 'Trig Substitution', expression: '√(a²-x²): x=a sin θ, √(a²+x²): x=a tan θ, √(x²-a²): x=a sec θ', description: 'Trigonometric substitution' },
                        { name: 'Partial Fractions', expression: 'P(x)/Q(x) = Σ A_k/(x-r_k) for distinct roots', description: 'Partial fraction decomposition' },
                        { name: 'Arc Length Formula', expression: 'L = ∫_a^b √(1+(dy/dx)²) dx', description: 'Arc length of a curve' },
                        { name: 'Surface of Revolution', expression: 'S = 2π ∫_a^b f(x)√(1+(f\'(x))²) dx', description: 'Surface area of revolution' },
                        { name: 'Volume by Disks', expression: 'V = π ∫_a^b [f(x)]² dx', description: 'Volume by disk method' },
                        { name: 'Volume by Shells', expression: 'V = 2π ∫_a^b x·f(x) dx', description: 'Volume by cylindrical shells' },
                        { name: 'Improper Integral', expression: '∫_a^∞ f(x) dx = lim_{b→∞} ∫_a^b f(x) dx', description: 'Improper integral definition' },
                        { name: 'Gamma Function', expression: 'Γ(n) = ∫_0^∞ xⁿ⁻¹e^(-x) dx', description: 'Gamma function integral' },
                        { name: 'Beta Function', expression: 'B(p,q) = ∫_0^1 x^(p-1)(1-x)^(q-1) dx', description: 'Beta function integral' },
                    ]
                },
                'multivariable': {
                    name: 'Multivariable Calculus',
                    formulas: [
                        { name: 'Partial Derivative', expression: '∂f/∂x = lim_{h→0} (f(x+h,y)-f(x,y))/h', description: 'Partial derivative definition' },
                        { name: 'Gradient', expression: '∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)', description: 'Gradient vector field' },
                        { name: 'Directional Derivative', expression: 'D_u f = ∇f · u = |∇f| cos θ', description: 'Derivative in direction of u' },
                        { name: 'Divergence', expression: '∇·F = ∂P/∂x + ∂Q/∂y + ∂R/∂z', description: 'Divergence of vector field' },
                        { name: 'Curl', expression: '∇×F = (∂R/∂y-∂Q/∂z, ∂P/∂z-∂R/∂x, ∂Q/∂x-∂P/∂y)', description: 'Curl of vector field' },
                        { name: 'Laplacian', expression: '∇²f = ∂²f/∂x² + ∂²f/∂y² + ∂²f/∂z²', description: 'Laplace operator' },
                        { name: 'Double Integral', expression: '∬_R f(x,y) dA = ∫∫ f(x,y) dx dy', description: 'Double integral over region' },
                        { name: 'Triple Integral', expression: '∭_V f(x,y,z) dV', description: 'Triple integral over volume' },
                        { name: 'Polar Coordinates', expression: 'x = r cos θ, y = r sin θ, dA = r dr dθ', description: 'Polar coordinate transformation' },
                        { name: 'Cylindrical Coords', expression: 'x=r cos θ, y=r sin θ, z=z, dV=r dr dθ dz', description: 'Cylindrical coordinates' },
                        { name: 'Spherical Coords', expression: 'x=ρ sin φ cos θ, y=ρ sin φ sin θ, z=ρ cos φ, dV=ρ² sin φ dρ dφ dθ', description: 'Spherical coordinates' },
                        { name: 'Green Theorem', expression: '∮(P dx + Q dy) = ∬(∂Q/∂x - ∂P/∂y) dA', description: 'Green theorem in 2D' },
                        { name: 'Stokes Theorem', expression: '∮_∂S F·dr = ∬_S (∇×F)·n dS', description: 'Stokes theorem' },
                        { name: 'Divergence Theorem', expression: '∬_∂V F·n dS = ∭_V (∇·F) dV', description: 'Gauss divergence theorem' },
                        { name: 'Clairaut Theorem', expression: '∂²f/∂x∂y = ∂²f/∂y∂x', description: 'Equality of mixed partials' },
                        { name: 'Chain Rule (Multi)', expression: '∂f/∂t = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)', description: 'Multivariable chain rule' },
                        { name: 'Lagrange Multipliers', expression: '∇f = λ∇g', description: 'Constrained optimization' },
                        { name: 'Hessian Matrix', expression: 'H(f) = [∂²f/∂x_i∂x_j]', description: 'Hessian matrix of second derivatives' },
                        { name: 'Jacobian Matrix', expression: 'J = [∂f_i/∂x_j]', description: 'Jacobian matrix of partial derivatives' },
                        { name: 'Taylor Series (Multi)', expression: 'f(x,y) = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b) + ...', description: 'Multivariable Taylor expansion' },
                    ]
                },
                'series': {
                    name: 'Series & Sequences',
                    formulas: [
                        { name: 'Arithmetic Series', expression: 'S_n = n(a₁ + a_n)/2', description: 'Sum of arithmetic sequence' },
                        { name: 'Geometric Series', expression: 'S_n = a(1-rⁿ)/(1-r), r≠1', description: 'Sum of geometric sequence' },
                        { name: 'Infinite Geometric', expression: 'S_∞ = a/(1-r), |r|<1', description: 'Infinite geometric sum' },
                        { name: 'Harmonic Series', expression: 'Σ 1/n = 1 + 1/2 + 1/3 + ... = ∞', description: 'Harmonic series diverges' },
                        { name: 'P-Series', expression: 'Σ 1/n^p converges if p>1', description: 'P-series convergence test' },
                        { name: 'Taylor Series', expression: 'f(x) = Σ f^(n)(a)(x-a)ⁿ/n!', description: 'Taylor series expansion, n=0..∞' },
                        { name: 'Maclaurin Series', expression: 'f(x) = Σ f^(n)(0) xⁿ/n!', description: 'Maclaurin series (a=0)' },
                        { name: 'Exponential Series', expression: 'e^x = Σ xⁿ/n!', description: 'Maclaurin series for e^x, n=0..∞' },
                        { name: 'Sine Series', expression: 'sin x = Σ (-1)ⁿ x²ⁿ⁺¹/(2n+1)!', description: 'Maclaurin series for sin x' },
                        { name: 'Cosine Series', expression: 'cos x = Σ (-1)ⁿ x²ⁿ/(2n)!', description: 'Maclaurin series for cos x' },
                        { name: 'ln(1+x) Series', expression: 'ln(1+x) = Σ (-1)ⁿ⁺¹ xⁿ/n', description: 'Maclaurin series for ln(1+x), |x|<1' },
                        { name: 'Arctan Series', expression: 'arctan x = Σ (-1)ⁿ x²ⁿ⁺¹/(2n+1)', description: 'Maclaurin series for arctan x, |x|≤1' },
                        { name: '(1+x)^a Series', expression: '(1+x)^a = Σ C(a,n) xⁿ', description: 'Binomial series, |x|<1' },
                        { name: 'Ratio Test', expression: 'lim |a_{n+1}/a_n| < 1 ⇒ converges', description: 'Ratio test for series' },
                        { name: 'Root Test', expression: 'lim sup ⁿ√|a_n| < 1 ⇒ converges', description: 'Root test for series' },
                        { name: 'Integral Test', expression: 'If f decreasing positive, Σ f(n) and ∫ f(x) dx converge/diverge together', description: 'Integral test for series' },
                        { name: 'Comparison Test', expression: '0 ≤ a_n ≤ b_n, Σ b_n converges ⇒ Σ a_n converges', description: 'Direct comparison test' },
                        { name: 'Alternating Series', expression: 'Σ (-1)ⁿ b_n converges if b_n → 0 decreasing', description: 'Alternating series test' },
                        { name: 'Fourier Series', expression: 'f(x) = a₀/2 + Σ a_n cos(nx) + b_n sin(nx)', description: 'Fourier series expansion' },
                        { name: 'Fourier Coefficients', expression: 'a_n = (1/π)∫_{-π}^{π} f(x)cos(nx) dx, b_n = (1/π)∫_{-π}^{π} f(x)sin(nx) dx', description: 'Fourier coefficient formulas' },
                        { name: 'Parseval Identity', expression: '(1/π)∫_{-π}^{π} f² dx = a₀²/2 + Σ(a_n²+b_n²)', description: 'Parseval energy identity' },
                    ]
                }
            }
        },
        'linear_algebra': {
            name: 'Linear Algebra',
            description: 'Matrix operations, vector spaces, and linear transformations',
            subcategories: {
                'matrix': {
                    name: 'Matrix Operations',
                    formulas: [
                        { name: 'Matrix Multiplication', expression: '(AB)_ij = Σ_k A_ik · B_kj', description: 'Matrix product definition' },
                        { name: 'Transpose', expression: '(A^T)_ij = A_ji', description: 'Matrix transpose' },
                        { name: 'Trace', expression: 'tr(A) = Σ_i A_ii', description: 'Sum of diagonal elements' },
                        { name: 'Determinant 2x2', expression: 'det([[a,b],[c,d]]) = ad - bc', description: '2x2 determinant' },
                        { name: 'Determinant 3x3', expression: 'det = a(ei-fh)-b(di-fg)+c(dh-eg)', description: '3x3 determinant' },
                        { name: 'Inverse 2x2', expression: 'A⁻¹ = 1/(ad-bc) · [[d,-b],[-c,a]]', description: '2x2 matrix inverse' },
                        { name: 'Matrix Inverse', expression: 'A⁻¹ = adj(A)/det(A)', description: 'Inverse via adjugate' },
                        { name: 'Cramer Rule', expression: 'x_i = det(A_i)/det(A)', description: 'Solving linear systems via determinants' },
                        { name: 'LU Decomposition', expression: 'A = LU', description: 'Lower-upper triangular decomposition' },
                        { name: 'QR Decomposition', expression: 'A = QR, Q^TQ=I', description: 'Orthogonal-triangular decomposition' },
                        { name: 'Singular Value', expression: 'A = UΣV^T', description: 'Singular value decomposition' },
                        { name: 'Eigenvalue Equation', expression: 'Av = λv', description: 'Eigenvalue-eigenvector definition' },
                        { name: 'Characteristic Poly', expression: 'det(A - λI) = 0', description: 'Characteristic polynomial' },
                        { name: 'Cayley-Hamilton', expression: 'p(A) = 0', description: 'Matrix satisfies its characteristic poly' },
                        { name: 'Gram-Schmidt', expression: 'u_k = v_k - Σ proj_{u_i}(v_k)', description: 'Orthogonalization process' },
                        { name: 'Rank-Nullity', expression: 'rank(A) + nullity(A) = n', description: 'Dimension theorem' },
                        { name: 'Sylvester Inequality', expression: 'rank(A)+rank(B)-n ≤ rank(AB) ≤ min(rank(A),rank(B))', description: 'Rank of product inequality' },
                        { name: 'Matrix Norm', expression: '||A|| = sup_{||x||=1} ||Ax||', description: 'Induced matrix norm' },
                        { name: 'Frobenius Norm', expression: '||A||_F = √(Σ_i Σ_j |a_ij|²)', description: 'Frobenius matrix norm' },
                        { name: 'Matrix Exponential', expression: 'e^A = Σ Aⁿ/n!', description: 'Matrix exponential series' },
                    ]
                },
                'vectors': {
                    name: 'Vector Spaces',
                    formulas: [
                        { name: 'Dot Product', expression: 'u·v = |u||v| cos θ = Σ u_i v_i', description: 'Vector dot product' },
                        { name: 'Cross Product (3D)', expression: 'u×v = (u₂v₃-u₃v₂, u₃v₁-u₁v₃, u₁v₂-u₂v₁)', description: 'Cross product in 3D' },
                        { name: 'Scalar Triple Product', expression: 'u·(v×w) = det([u v w])', description: 'Volume of parallelepiped' },
                        { name: 'Vector Triple Product', expression: 'u×(v×w) = (u·w)v - (u·v)w', description: 'Vector triple product expansion' },
                        { name: 'Cauchy-Schwarz', expression: '|u·v| ≤ |u||v|', description: 'Cauchy-Schwarz inequality' },
                        { name: 'Triangle Inequality', expression: '|u+v| ≤ |u|+|v|', description: 'Triangle inequality for vectors' },
                        { name: 'Projection', expression: 'proj_u(v) = (v·u)/(u·u) · u', description: 'Vector projection' },
                        { name: 'Lagrange Identity', expression: '|u×v|² = |u|²|v|² - (u·v)²', description: 'Cross product magnitude' },
                        { name: 'Linear Combination', expression: 'v = c₁v₁ + c₂v₂ + ... + c_nv_n', description: 'Vector as linear combination' },
                        { name: 'Basis Change', expression: '[v]_B\' = P_{B←B\'}[v]_B', description: 'Change of basis matrix' },
                    ]
                }
            }
        },
        'differential_eq': {
            name: 'Differential Equations',
            description: 'Ordinary and partial differential equations',
            subcategories: {
                'ode': {
                    name: 'Ordinary Differential Equations',
                    formulas: [
                        { name: 'Separable ODE', expression: 'dy/dx = f(x)g(y) ⇒ ∫ dy/g(y) = ∫ f(x) dx', description: 'Separation of variables' },
                        { name: 'First Order Linear', expression: 'dy/dx + P(x)y = Q(x), y = e^{-∫P}(∫Qe^{∫P}dx + C)', description: 'Integrating factor solution' },
                        { name: 'Bernoulli Equation', expression: 'dy/dx + P(x)y = Q(x)yⁿ, let v = y^{1-n}', description: 'Bernoulli transformation' },
                        { name: 'Exact Equation', expression: 'M dx + N dy = 0, ∂M/∂y = ∂N/∂x', description: 'Exact differential condition' },
                        { name: 'Homogeneous ODE', expression: 'dy/dx = f(y/x), let v = y/x', description: 'Homogeneous substitution' },
                        { name: '2nd Order Homog Linear', expression: 'y″ + ay′ + by = 0, r² + ar + b = 0', description: 'Characteristic equation' },
                        { name: 'Distinct Real Roots', expression: 'y = c₁e^{r₁x} + c₂e^{r₂x}', description: 'Solution for distinct roots' },
                        { name: 'Repeated Real Roots', expression: 'y = (c₁ + c₂x)e^{rx}', description: 'Solution for repeated roots' },
                        { name: 'Complex Roots', expression: 'y = e^{αx}(c₁ cos βx + c₂ sin βx)', description: 'Solution for complex roots' },
                        { name: 'Euler-Cauchy', expression: 'x²y″ + axy′ + by = 0, r²+(a-1)r+b=0', description: 'Euler-Cauchy equation' },
                        { name: 'Wronskian', expression: 'W(f,g) = fg\' - f\'g', description: 'Wronskian determinant' },
                        { name: 'Variation of Parameters', expression: 'y_p = -y₁∫(y₂g/W)dx + y₂∫(y₁g/W)dx', description: 'Particular solution method' },
                        { name: 'Undetermined Coefficients', expression: 'y_p = guess based on g(x) form', description: 'Method of undetermined coefficients' },
                        { name: 'Reduction of Order', expression: 'y₂ = y₁∫(e^{-∫P}/y₁²)dx', description: 'Reduction of order method' },
                        { name: 'Picard-Lindelof', expression: 'y\'=f(x,y), y(x₀)=y₀ has unique solution if f Lipschitz', description: 'Existence and uniqueness theorem' },
                        { name: 'Runge-Kutta 4th Order', expression: 'y_{n+1}=y_n+(k₁+2k₂+2k₃+k₄)/6, k₁=hf(x_n,y_n), k₂=hf(x_n+h/2,y_n+k₁/2), k₃=hf(x_n+h/2,y_n+k₂/2), k₄=hf(x_n+h,y_n+k₃)', description: 'Classical RK4 method' },
                    ]
                },
                'pde': {
                    name: 'Partial Differential Equations',
                    formulas: [
                        { name: 'Heat Equation', expression: '∂u/∂t = α² ∂²u/∂x²', description: '1D heat/diffusion equation' },
                        { name: 'Wave Equation', expression: '∂²u/∂t² = c² ∂²u/∂x²', description: '1D wave equation' },
                        { name: 'Laplace Equation', expression: '∂²u/∂x² + ∂²u/∂y² = 0', description: 'Laplace equation in 2D' },
                        { name: 'Poisson Equation', expression: '∇²u = f(x,y,z)', description: 'Poisson equation' },
                        { name: 'Burgers Equation', expression: '∂u/∂t + u·∂u/∂x = ν·∂²u/∂x²', description: 'Viscous Burgers equation' },
                        { name: 'Separation of Variables', expression: 'u(x,t) = X(x)T(t)', description: 'PDE solution method' },
                        { name: 'd\'Alembert Solution', expression: 'u(x,t) = (f(x+ct)+f(x-ct))/2 + (1/2c)∫_{x-ct}^{x+ct} g(s) ds', description: 'Wave equation general solution' },
                        { name: 'Schrödinger Equation', expression: 'iℏ·∂Ψ/∂t = -ℏ²/(2m)·∂²Ψ/∂x² + V(x)Ψ', description: 'Time-dependent Schrödinger' },
                        { name: 'Korteweg-de Vries', expression: '∂u/∂t + 6u·∂u/∂x + ∂³u/∂x³ = 0', description: 'KdV equation for solitons' },
                        { name: 'Navier-Stokes', expression: 'ρ(∂u/∂t + u·∇u) = -∇p + μ∇²u + f', description: 'Fluid momentum equation' },
                        { name: 'Maxwell Equations', expression: '∇·E = ρ/ε₀, ∇·B = 0, ∇×E = -∂B/∂t, ∇×B = μ₀J + μ₀ε₀∂E/∂t', description: 'Electromagnetic wave PDEs' },
                        { name: 'Transport Equation', expression: '∂u/∂t + c·∂u/∂x = 0', description: 'Advection/transport equation' },
                    ]
                }
            }
        },
        'number_theory': {
            name: 'Number Theory',
            description: 'Properties of integers, primes, and number systems',
            subcategories: {
                'fundamental': {
                    name: 'Fundamental Number Theory',
                    formulas: [
                        { name: 'Euclidean Division', expression: 'a = qb + r, 0 ≤ r < |b|', description: 'Division algorithm' },
                        { name: 'GCD Definition', expression: 'gcd(a,b) = max d such that d|a and d|b', description: 'Greatest common divisor' },
                        { name: 'Euclidean Algorithm', expression: 'gcd(a,b) = gcd(b, a mod b)', description: 'Euclidean algorithm for GCD' },
                        { name: 'Extended Euclidean', expression: 'ax + by = gcd(a,b)', description: 'Bezout identity' },
                        { name: 'LCM', expression: 'lcm(a,b) = |ab|/gcd(a,b)', description: 'Least common multiple' },
                        { name: 'Fundamental Theorem', expression: 'n = ∏ p_i^{e_i} (unique factorization)', description: 'Prime factorization theorem' },
                        { name: 'Euclid Infinitude', expression: 'There are infinitely many primes', description: 'Euclid theorem on prime infinitude' },
                        { name: 'Prime Number Theorem', expression: 'π(x) ~ x/ln x as x→∞', description: 'Prime counting asymptotics' },
                        { name: 'Fermat Little Theorem', expression: 'a^p ≡ a (mod p), p prime', description: 'Fermat little theorem' },
                        { name: 'Euler Theorem', expression: 'a^φ(n) ≡ 1 (mod n), gcd(a,n)=1', description: 'Euler totient theorem' },
                        { name: 'Euler Totient', expression: 'φ(n) = n ∏ (1-1/p_i)', description: 'Euler totient function' },
                        { name: 'Chinese Remainder', expression: 'x ≡ a_i (mod n_i) has unique solution mod N = ∏ n_i', description: 'Chinese remainder theorem' },
                        { name: 'Wilson Theorem', expression: '(p-1)! ≡ -1 (mod p) iff p is prime', description: 'Wilson prime characterization' },
                        { name: 'Möbius Function', expression: 'μ(n) = 0 if n has squared prime factor, else (-1)^k', description: 'Möbius function' },
                        { name: 'Möbius Inversion', expression: 'f(n) = Σ_{d|n} g(d) ⇔ g(n) = Σ_{d|n} μ(d)f(n/d)', description: 'Möbius inversion formula' },
                        { name: 'Divisor Sum', expression: 'σ(n) = Σ_{d|n} d', description: 'Sum of divisors function' },
                        { name: 'Divisor Count', expression: 'd(n) = ∏ (e_i+1)', description: 'Number of divisors function' },
                        { name: 'Perfect Number', expression: 'σ(n) = 2n (e.g., 6, 28, 496, 8128)', description: 'Perfect number definition' },
                        { name: 'Mersenne Prime', expression: 'M_p = 2^p - 1 where p and M_p are prime', description: 'Mersenne prime definition' },
                        { name: 'Largest Known Prime', expression: '2^(82589933) - 1 (as of 2026)', description: 'Largest known Mersenne prime' },
                        { name: 'Fibonacci Numbers', expression: 'F_n = F_{n-1} + F_{n-2}, F_0=0, F_1=1', description: 'Fibonacci sequence definition' },
                        { name: 'Binet Formula', expression: 'F_n = (φⁿ - ψⁿ)/√5, φ = (1+√5)/2', description: 'Closed form for Fibonacci' },
                        { name: 'Catalan Numbers', expression: 'C_n = (2n)!/((n+1)!n!)', description: 'Catalan number definition' },
                        { name: 'Stirling 1st Kind', expression: 's(n,k): x(x-1)...(x-n+1) = Σ s(n,k)x^k', description: 'Stirling numbers of first kind' },
                        { name: 'Stirling 2nd Kind', expression: 'S(n,k): partitions of n elements into k nonempty subsets', description: 'Stirling numbers of second kind' },
                        { name: 'Bell Numbers', expression: 'B_n = Σ S(n,k), total partitions of n-set', description: 'Bell number definition' },
                        { name: 'Partition Function', expression: 'p(n): number of unrestricted partitions of n', description: 'Integer partition function' },
                        { name: 'Goldbach Conjecture', expression: 'Every even n>2 is sum of two primes', description: 'Unproven Goldbach conjecture' },
                        { name: 'Riemann Hypothesis', expression: 'All nontrivial zeros of ζ(s) have Re(s)=1/2', description: 'Riemann hypothesis (unproven)' },
                        { name: 'Riemann Zeta', expression: 'ζ(s) = Σ 1/n^s for Re(s)>1', description: 'Riemann zeta function' },
                        { name: 'Zeta Even Values', expression: 'ζ(2n) = (-1)^{n+1}B_{2n}(2π)^{2n}/(2(2n)!)', description: 'Even zeta values via Bernoulli' },
                        { name: 'Basel Problem', expression: 'ζ(2) = π²/6', description: 'Sum of reciprocal squares' },
                    ]
                }
            }
        },
        'probability': {
            name: 'Probability & Statistics',
            description: 'Probability theory, distributions, and statistical formulas',
            subcategories: {
                'probability': {
                    name: 'Probability Theory',
                    formulas: [
                        { name: 'Basic Probability', expression: 'P(A) = |A|/|S|', description: 'Classical probability definition' },
                        { name: 'Addition Rule', expression: 'P(A∪B) = P(A) + P(B) - P(A∩B)', description: 'Probability of union' },
                        { name: 'Multiplication Rule', expression: 'P(A∩B) = P(A)·P(B|A)', description: 'Probability of intersection' },
                        { name: 'Conditional Probability', expression: 'P(A|B) = P(A∩B)/P(B)', description: 'Conditional probability' },
                        { name: 'Bayes Theorem', expression: 'P(A|B) = P(B|A)P(A)/P(B)', description: 'Bayes theorem for inverse probability' },
                        { name: 'Law of Total Prob', expression: 'P(B) = Σ P(B|A_i)P(A_i)', description: 'Total probability theorem' },
                        { name: 'Independence', expression: 'P(A∩B) = P(A)P(B)', description: 'Statistical independence' },
                        { name: 'Permutation', expression: 'P(n,r) = n!/(n-r)!', description: 'Permutation formula' },
                        { name: 'Combination', expression: 'C(n,r) = n!/(r!(n-r)!)', description: 'Combination/binomial coefficient' },
                        { name: 'Multinomial', expression: 'P = n!/(n₁!n₂!...n_k!)', description: 'Multinomial coefficient' },
                        { name: 'Expected Value', expression: 'E[X] = Σ x_i·p_i', description: 'Discrete expected value' },
                        { name: 'Variance', expression: 'Var(X) = E[(X-μ)²] = E[X²] - μ²', description: 'Variance definition' },
                        { name: 'Standard Deviation', expression: 'σ = √Var(X)', description: 'Standard deviation' },
                        { name: 'Covariance', expression: 'Cov(X,Y) = E[(X-μ_X)(Y-μ_Y)]', description: 'Covariance of two variables' },
                        { name: 'Correlation', expression: 'ρ(X,Y) = Cov(X,Y)/(σ_X σ_Y)', description: 'Pearson correlation coefficient' },
                        { name: 'Chebyshev Inequality', expression: 'P(|X-μ|≥kσ) ≤ 1/k²', description: 'Chebyshev inequality' },
                        { name: 'Markov Inequality', expression: 'P(X≥a) ≤ E[X]/a, X≥0', description: 'Markov inequality' },
                        { name: 'Law of Large Numbers', expression: 'X̅_n → μ as n→∞', description: 'Law of large numbers' },
                        { name: 'Central Limit Theorem', expression: 'X̅ ~ N(μ, σ²/n) for large n', description: 'Central limit theorem' },
                        { name: 'Moment Generating', expression: 'M_X(t) = E[e^{tX}]', description: 'Moment generating function' },
                        { name: 'Chernoff Bound', expression: 'P(X ≥ a) ≤ e^{-ta}M_X(t), t>0', description: 'Chernoff bound' },
                        { name: 'Jensen Inequality', expression: 'f(E[X]) ≤ E[f(X)] for convex f', description: 'Jensen inequality' },
                    ]
                },
                'distributions': {
                    name: 'Probability Distributions',
                    formulas: [
                        { name: 'Binomial PMF', expression: 'P(X=k) = C(n,k)p^k(1-p)^{n-k}', description: 'Binomial distribution' },
                        { name: 'Poisson PMF', expression: 'P(X=k) = e^{-λ}λ^k/k!', description: 'Poisson distribution' },
                        { name: 'Geometric PMF', expression: 'P(X=k) = (1-p)^{k-1}p', description: 'Geometric distribution' },
                        { name: 'Hypergeometric PMF', expression: 'P(X=k) = C(K,k)C(N-K,n-k)/C(N,n)', description: 'Hypergeometric distribution' },
                        { name: 'Uniform (Discrete)', expression: 'P(X=k) = 1/n, k=1..n', description: 'Discrete uniform distribution' },
                        { name: 'Negative Binomial', expression: 'P(X=k) = C(k-1,r-1)p^r(1-p)^{k-r}', description: 'Negative binomial distribution' },
                        { name: 'Normal PDF', expression: 'f(x) = 1/(σ√(2π))·e^{-(x-μ)²/(2σ²)}', description: 'Normal/Gaussian distribution' },
                        { name: 'Standard Normal', expression: 'Z = (X-μ)/σ', description: 'Standard normal transformation' },
                        { name: 'Exponential PDF', expression: 'f(x) = λe^{-λx}, x≥0', description: 'Exponential distribution' },
                        { name: 'Gamma PDF', expression: 'f(x) = β^α/Γ(α)·x^{α-1}e^{-βx}, x>0', description: 'Gamma distribution' },
                        { name: 'Beta PDF', expression: 'f(x) = x^{α-1}(1-x)^{β-1}/B(α,β), 0≤x≤1', description: 'Beta distribution' },
                        { name: 'Chi-Square PDF', expression: 'f(x) = x^{k/2-1}e^{-x/2}/(2^{k/2}Γ(k/2)), x>0', description: 'Chi-square distribution' },
                        { name: 'Student t PDF', expression: 'f(x) = Γ((ν+1)/2)/(√(νπ)Γ(ν/2))·(1+x²/ν)^{-(ν+1)/2}', description: 'Student t-distribution' },
                        { name: 'F-Distribution', expression: 'f(x) = √((d₁x)^{d₁}d₂^{d₂}/(d₁x+d₂)^{d₁+d₂})/(xB(d₁/2,d₂/2))', description: 'F-distribution PDF' },
                        { name: 'Weibull PDF', expression: 'f(x) = k/λ·(x/λ)^{k-1}e^{-(x/λ)^k}, x≥0', description: 'Weibull distribution' },
                        { name: 'Pareto PDF', expression: 'f(x) = αx_m^α/x^{α+1}, x≥x_m', description: 'Pareto distribution' },
                        { name: 'Cauchy PDF', expression: 'f(x) = 1/(πγ·(1+((x-x₀)/γ)²))', description: 'Cauchy distribution' },
                        { name: 'Log-Normal PDF', expression: 'f(x) = 1/(xσ√(2π))·e^{-(ln x-μ)²/(2σ²)}', description: 'Log-normal distribution' },
                    ]
                },
                'statistics': {
                    name: 'Statistical Inference',
                    formulas: [
                        { name: 'Sample Mean', expression: 'x̅ = (1/n)Σ x_i', description: 'Sample mean' },
                        { name: 'Sample Variance', expression: 's² = Σ(x_i-x̅)²/(n-1)', description: 'Unbiased sample variance' },
                        { name: 'Sample Std Dev', expression: 's = √s²', description: 'Sample standard deviation' },
                        { name: 'Z-Statistic', expression: 'z = (x̅-μ)/(σ/√n)', description: 'Z-test statistic' },
                        { name: 'T-Statistic', expression: 't = (x̅-μ)/(s/√n)', description: 'T-test statistic' },
                        { name: 'Chi-Square Stat', expression: 'χ² = Σ(O_i-E_i)²/E_i', description: 'Chi-square test statistic' },
                        { name: 'ANOVA F-Stat', expression: 'F = MSB/MSW', description: 'One-way ANOVA F statistic' },
                        { name: 'Confidence Interval Z', expression: 'x̅ ± z_{α/2}·σ/√n', description: 'Z-based confidence interval' },
                        { name: 'Confidence Interval T', expression: 'x̅ ± t_{α/2,n-1}·s/√n', description: 'T-based confidence interval' },
                        { name: 'Linear Regression', expression: 'y = β₀ + β₁x', description: 'Simple linear regression' },
                        { name: 'Regression Slope', expression: 'β₁ = Σ(x_i-x̅)(y_i-ȳ)/Σ(x_i-x̅)²', description: 'Least squares slope' },
                        { name: 'R-squared', expression: 'R² = 1 - SS_res/SS_tot', description: 'Coefficient of determination' },
                        { name: 'Adjusted R²', expression: 'R²_adj = 1 - (1-R²)(n-1)/(n-p-1)', description: 'Adjusted R-squared' },
                        { name: 'MSE', expression: 'MSE = (1/n)Σ(y_i-ŷ_i)²', description: 'Mean squared error' },
                        { name: 'MAE', expression: 'MAE = (1/n)Σ|y_i-ŷ_i|', description: 'Mean absolute error' },
                        { name: 'Maximum Likelihood', expression: 'L(θ|x) = ∏ f(x_i|θ), θ̂ = argmax L', description: 'Maximum likelihood estimation' },
                        { name: 'AIC', expression: 'AIC = 2k - 2ln(L̂)', description: 'Akaike information criterion' },
                        { name: 'BIC', expression: 'BIC = k·ln(n) - 2ln(L̂)', description: 'Bayesian information criterion' },
                        { name: 'Kolmogorov-Smirnov', expression: 'D_n = sup_x |F_n(x)-F(x)|', description: 'K-S test statistic' },
                        { name: 'Shapiro-Wilk', expression: 'W = (Σ a_i x_{(i)})²/Σ(x_i-x̅)²', description: 'Normality test statistic' },
                    ]
                }
            }
        },
        'set_theory': {
            name: 'Set Theory & Logic',
            description: 'Mathematical logic, set operations, and foundations',
            subcategories: {
                'sets': {
                    name: 'Set Theory',
                    formulas: [
                        { name: 'Union', expression: 'A ∪ B = {x | x∈A ∨ x∈B}', description: 'Set union' },
                        { name: 'Intersection', expression: 'A ∩ B = {x | x∈A ∧ x∈B}', description: 'Set intersection' },
                        { name: 'Difference', expression: 'A \\ B = {x | x∈A ∧ x∉B}', description: 'Set difference' },
                        { name: 'Complement', expression: 'A^c = {x ∈ U | x∉A}', description: 'Set complement (relative to universe)' },
                        { name: 'Symmetric Diff', expression: 'A Δ B = (A\\B) ∪ (B\\A)', description: 'Symmetric difference' },
                        { name: 'Cartesian Product', expression: 'A × B = {(a,b) | a∈A, b∈B}', description: 'Cartesian product' },
                        { name: 'Power Set', expression: '|P(A)| = 2^{|A|}', description: 'Size of power set' },
                        { name: 'De Morgan Law 1', expression: '(A ∪ B)^c = A^c ∩ B^c', description: 'De Morgan law for union' },
                        { name: 'De Morgan Law 2', expression: '(A ∩ B)^c = A^c ∪ B^c', description: 'De Morgan law for intersection' },
                        { name: 'Distributive 1', expression: 'A ∩ (B ∪ C) = (A∩B) ∪ (A∩C)', description: 'Distributive law for sets' },
                        { name: 'Distributive 2', expression: 'A ∪ (B ∩ C) = (A∪B) ∩ (A∪C)', description: 'Distributive law for sets' },
                        { name: 'Cardinality of Union', expression: '|A∪B| = |A|+|B|-|A∩B|', description: 'Inclusion-exclusion principle' },
                        { name: 'Cantor Theorem', expression: '|A| < |P(A)|', description: 'Cantor theorem on cardinalities' },
                        { name: 'Continuum Hypothesis', expression: '¬∃S: ℵ₀ < |S| < 2^{ℵ₀}', description: 'Continuum hypothesis (independent of ZFC)' },
                        { name: 'Zorn Lemma', expression: 'If every chain in poset P has upper bound, then P has maximal element', description: 'Zorn lemma (equivalent to AC)' },
                        { name: 'Axiom of Choice', expression: '∏_{i∈I} A_i ≠ ∅ for nonempty sets', description: 'Axiom of choice' },
                    ]
                },
                'logic': {
                    name: 'Mathematical Logic',
                    formulas: [
                        { name: 'Modus Ponens', expression: 'P→Q, P ⊢ Q', description: 'Modus ponens inference rule' },
                        { name: 'Modus Tollens', expression: 'P→Q, ¬Q ⊢ ¬P', description: 'Modus tollens inference rule' },
                        { name: 'Hypothetical Syllogism', expression: 'P→Q, Q→R ⊢ P→R', description: 'Hypothetical syllogism' },
                        { name: 'Disjunctive Syllogism', expression: 'P∨Q, ¬P ⊢ Q', description: 'Disjunctive syllogism' },
                        { name: 'Reductio Ad Absurdum', expression: 'P→(Q∧¬Q) ⊢ ¬P', description: 'Proof by contradiction' },
                        { name: 'Truth Table AND', expression: 'P∧Q: T only when P=T and Q=T', description: 'Conjunction truth table' },
                        { name: 'Truth Table OR', expression: 'P∨Q: F only when P=F and Q=F', description: 'Disjunction truth table' },
                        { name: 'Truth Table NOT', expression: '¬P: opposite of P', description: 'Negation truth table' },
                        { name: 'Truth Table IMPLIES', expression: 'P→Q: F only when P=T and Q=F', description: 'Implication truth table' },
                        { name: 'De Morgan Logic', expression: '¬(P∧Q) = ¬P∨¬Q, ¬(P∨Q) = ¬P∧¬Q', description: 'De Morgan laws in logic' },
                        { name: 'Contrapositive', expression: 'P→Q ≡ ¬Q→¬P', description: 'Contrapositive equivalence' },
                        { name: 'Double Negation', expression: '¬¬P ≡ P', description: 'Double negation elimination' },
                        { name: 'Distributive Logic', expression: 'P∧(Q∨R) ≡ (P∧Q)∨(P∧R)', description: 'Distributive law in logic' },
                        { name: 'Gödel Incompleteness', expression: 'Any consistent formal system containing arithmetic is incomplete', description: 'Gödel first incompleteness theorem' },
                        { name: 'Gödel Completeness', expression: 'If φ is true in all models of T, then T ⊢ φ', description: 'Gödel completeness theorem' },
                        { name: 'Compactness Theorem', expression: 'If every finite subset of Σ has a model, then Σ has a model', description: 'Compactness theorem in FOL' },
                    ]
                }
            }
        },
        'combinatorics': {
            name: 'Combinatorics',
            description: 'Enumeration, graph theory, and combinatorial structures',
            subcategories: {
                'counting': {
                    name: 'Counting & Enumeration',
                    formulas: [
                        { name: 'Sum Rule', expression: '|A₁ ∪ A₂| = |A₁| + |A₂| if disjoint', description: 'Rule of sum' },
                        { name: 'Product Rule', expression: '|A₁ × A₂| = |A₁|·|A₂|', description: 'Rule of product' },
                        { name: 'Pigeonhole Principle', expression: 'If n items in m boxes, n>m, then at least one box has ≥2', description: 'Pigeonhole principle' },
                        { name: 'Generalized PHP', expression: 'If n items in m boxes, some box has ≥⌈n/m⌉ items', description: 'Generalized pigeonhole' },
                        { name: 'Permutation with Rep', expression: 'n^r', description: 'Permutations with repetition' },
                        { name: 'Permutation no Rep', expression: 'P(n,r) = n!/(n-r)!', description: 'Permutations without repetition' },
                        { name: 'Combination no Rep', expression: 'C(n,r) = n!/(r!(n-r)!)', description: 'Combinations without repetition' },
                        { name: 'Combination with Rep', expression: 'C(n+r-1,r)', description: 'Stars and bars formula' },
                        { name: 'Circular Permutation', expression: '(n-1)!', description: 'Permutations in a circle' },
                        { name: 'Derangements', expression: '!n = n! Σ (-1)^k/k!', description: 'Subfactorial/derangement formula' },
                        { name: 'Stirling Formula', expression: 'n! ~ √(2πn)(n/e)^n', description: 'Stirling approximation for n!' },
                        { name: 'Catalan Number', expression: 'C_n = (1/(n+1))C(2n,n)', description: 'Catalan number' },
                        { name: 'Inclusion-Exclusion', expression: '|∪A_i| = Σ|A_i| - Σ|A_i∩A_j| + Σ|A_i∩A_j∩A_k| - ...', description: 'Inclusion-exclusion principle' },
                        { name: 'Binomial Identity', expression: 'C(n,k) = C(n-1,k-1) + C(n-1,k)', description: 'Pascal rule' },
                        { name: 'Vandermonde Identity', expression: 'C(m+n,r) = Σ C(m,k)C(n,r-k)', description: 'Vandermonde convolution' },
                        { name: 'Multinomial Theorem', expression: '(x₁+...+x_m)^n = Σ n!/(n₁!...n_m!)·x₁ⁿ¹...x_mⁿᵐ', description: 'Multinomial expansion' },
                    ]
                },
                'graph': {
                    name: 'Graph Theory',
                    formulas: [
                        { name: 'Handshaking Lemma', expression: 'Σ deg(v) = 2|E|', description: 'Sum of degrees equals twice edges' },
                        { name: 'Euler Path', expression: 'An Eulerian path exists iff 0 or 2 vertices have odd degree', description: 'Euler path condition' },
                        { name: 'Euler Circuit', expression: 'An Eulerian circuit exists iff all vertices have even degree', description: 'Euler circuit condition' },
                        { name: 'Hamiltonian Cycle', expression: 'If deg(v)≥n/2 for all v, then G is Hamiltonian', description: 'Dirac theorem' },
                        { name: 'Ore Theorem', expression: 'If deg(u)+deg(v)≥n for all nonadjacent u,v, then G is Hamiltonian', description: 'Ore sufficient condition' },
                        { name: 'Chromatic Number', expression: 'χ(G) ≤ max degree + 1 (for non-complete, non-odd-cycle)', description: 'Brook theorem' },
                        { name: 'Four Color Theorem', expression: 'Every planar graph is 4-colorable', description: 'Four color theorem' },
                        { name: 'Kuratowski Theorem', expression: 'A graph is planar iff it has no K₅ or K₃,₃ subdivision', description: 'Planar graph characterization' },
                        { name: 'Euler Planar', expression: 'V - E + F = 1 + C (for planar; C=components)', description: 'Euler planar formula' },
                        { name: 'Max Planar Edges', expression: '|E| ≤ 3|V| - 6 for planar simple graphs', description: 'Maximum planar edges' },
                        { name: 'Tree Edges', expression: '|E| = |V| - 1 for trees', description: 'Edge count in trees' },
                        { name: 'Cayley Formula', expression: 'n^{n-2} labeled trees on n vertices', description: 'Cayley tree counting' },
                        { name: 'MST', expression: 'Minimum spanning tree contains the cheapest edge crossing any cut', description: 'Cut property for MST' },
                        { name: 'Dijkstra Algorithm', expression: 'O(V²) or O((V+E)log V) with heap', description: 'Shortest path algorithm complexity' },
                        { name: 'Kruskal Algorithm', expression: 'O(E log E) for MST', description: 'Kruskal MST algorithm' },
                        { name: 'Prim Algorithm', expression: 'O(E log V) with heap for MST', description: 'Prim MST algorithm' },
                        { name: 'Max Flow Min Cut', expression: 'max flow = min cut capacity', description: 'Ford-Fulkerson theorem' },
                        { name: 'Hall Marriage', expression: '|N(S)| ≥ |S| for all S ⊆ X iff perfect matching exists', description: 'Hall matching theorem' },
                        { name: 'Ramsey Numbers', expression: 'R(m,n): min size such that any 2-coloring of K_n has K_m or K_n', description: 'Ramsey number definition' },
                    ]
                }
            }
        },
        'topology': {
            name: 'Topology',
            description: 'Topological spaces, continuity, and algebraic topology',
            subcategories: {
                'general': {
                    name: 'General Topology',
                    formulas: [
                        { name: 'Open Set Def', expression: 'A set O is open if ∀x∈O, ∃ε>0: B_ε(x)⊆O', description: 'Definition of open set' },
                        { name: 'Closed Set Def', expression: 'A set is closed iff its complement is open', description: 'Definition of closed set' },
                        { name: 'Closure', expression: 'cl(A) = A ∪ A\' (A\' = limit points)', description: 'Closure of a set' },
                        { name: 'Interior', expression: 'int(A) = largest open subset of A', description: 'Interior of a set' },
                        { name: 'Boundary', expression: '∂A = cl(A) ∩ cl(A^c)', description: 'Boundary of a set' },
                        { name: 'Continuous Func', expression: 'f is continuous iff f⁻¹(O) is open for all open O', description: 'Topological continuity' },
                        { name: 'Homeomorphism', expression: 'A bijection f such that f and f⁻¹ are continuous', description: 'Topological equivalence' },
                        { name: 'Compactness (Heine-Borel)', expression: 'In Rⁿ, compact ⇔ closed and bounded', description: 'Heine-Borel theorem' },
                        { name: 'Bolzano-Weierstrass', expression: 'Every bounded sequence in Rⁿ has a convergent subsequence', description: 'Bolzano-Weierstrass theorem' },
                        { name: 'Connected Set', expression: 'A set is connected if it cannot be written as union of two disjoint nonempty open sets', description: 'Connectedness definition' },
                        { name: 'Intermediate Value', expression: 'If f continuous on [a,b], f takes all values between f(a) and f(b)', description: 'Intermediate value theorem' },
                        { name: 'Extreme Value', expression: 'Continuous function on compact set attains max and min', description: 'Extreme value theorem' },
                        { name: 'Baire Category', expression: 'Complete metric spaces cannot be countable union of nowhere dense sets', description: 'Baire category theorem' },
                        { name: 'Tychonoff Theorem', expression: 'Product of compact spaces is compact', description: 'Tychonoff product theorem' },
                        { name: 'Urysohn Lemma', expression: 'Closed disjoint sets in normal space can be separated by continuous function', description: 'Urysohn lemma' },
                        { name: 'Tietze Extension', expression: 'Continuous function on closed subset of normal space extends to whole space', description: 'Tietze extension theorem' },
                    ]
                },
                'algebraic': {
                    name: 'Algebraic Topology',
                    formulas: [
                        { name: 'Fundamental Group', expression: 'π₁(X,x₀) = {homotopy classes of loops at x₀}', description: 'First homotopy group' },
                        { name: 'Homology Groups', expression: 'H_n(X) = ker(∂_n)/im(∂_{n+1})', description: 'Singular homology definition' },
                        { name: 'Euler Characteristic', expression: 'χ = Σ (-1)^n · rank(H_n)', description: 'Euler characteristic via homology' },
                        { name: 'Betti Numbers', expression: 'b_n = rank(H_n(X))', description: 'Betti number definition' },
                        { name: 'Poincaré Duality', expression: 'H_k(M) ≅ H^{n-k}(M) for closed orientable n-manifold M', description: 'Poincaré duality' },
                        { name: 'Mayer-Vietoris', expression: '...→H_n(A∩B)→H_n(A)⊕H_n(B)→H_n(X)→H_{n-1}(A∩B)→...', description: 'Mayer-Vietoris exact sequence' },
                        { name: 'Seifert-van Kampen', expression: 'π₁(X) ≅ π₁(A) ★_{π₁(A∩B)} π₁(B)', description: 'Seifert-van Kampen theorem' },
                        { name: 'Hurewicz Theorem', expression: 'π₁(X)/[π₁,π₁] ≅ H₁(X)', description: 'First homology from fundamental group' },
                        { name: 'Lefschetz Fixed Point', expression: 'L(f) = Σ (-1)^k tr(f_*: H_k→H_k)', description: 'Lefschetz fixed point formula' },
                        { name: 'Brouwer Fixed Point', expression: 'Every continuous f: Bⁿ→Bⁿ has a fixed point', description: 'Brouwer fixed point theorem' },
                    ]
                }
            }
        },
        'measure_theory': {
            name: 'Measure Theory & Functional Analysis',
            description: 'Integration theory, function spaces, and operators',
            subcategories: {
                'measure': {
                    name: 'Measure Theory',
                    formulas: [
                        { name: 'Sigma-Algebra', expression: 'A σ-algebra is closed under complements and countable unions', description: 'Sigma-algebra definition' },
                        { name: 'Measure Definition', expression: 'μ(∪A_n) = Σ μ(A_n) for disjoint A_n', description: 'Countable additivity' },
                        { name: 'Lebesgue Measure', expression: 'λ([a,b]) = b-a', description: 'Lebesgue measure on R' },
                        { name: 'Lebesgue Integral', expression: '∫ f dμ = sup{∫ φ dμ : 0≤φ≤f, φ simple}', description: 'Lebesgue integral definition' },
                        { name: 'Fatou Lemma', expression: '∫ liminf f_n dμ ≤ liminf ∫ f_n dμ', description: 'Fatou lemma' },
                        { name: 'Monotone Convergence', expression: 'If f_n ↗ f, then ∫ f_n → ∫ f', description: 'Monotone convergence theorem' },
                        { name: 'Dominated Convergence', expression: 'If f_n → f a.e. and |f_n|≤g integrable, then ∫ f_n → ∫ f', description: 'Lebesgue DCT' },
                        { name: 'Fubini Theorem', expression: '∫_{X×Y} f d(μ×ν) = ∫_X (∫_Y f dν) dμ = ∫_Y (∫_X f dμ) dν', description: 'Fubini-Tonelli theorem' },
                        { name: 'Radon-Nikodym', expression: 'dν = f dμ iff ν ≪ μ, f = dν/dμ', description: 'Radon-Nikodym derivative' },
                        { name: 'Lp Norm', expression: '||f||_p = (∫ |f|^p dμ)^{1/p}', description: 'Lp norm definition' },
                        { name: 'Holder Inequality', expression: '||fg||_1 ≤ ||f||_p ||g||_q, 1/p+1/q=1', description: 'Holder inequality' },
                        { name: 'Minkowski Inequality', expression: '||f+g||_p ≤ ||f||_p + ||g||_p', description: 'Minkowski inequality' },
                        { name: 'Riesz Representation', expression: 'Every bounded linear functional on L^p is of form f→∫ fg dμ', description: 'Riesz representation theorem' },
                    ]
                },
                'functional': {
                    name: 'Functional Analysis',
                    formulas: [
                        { name: 'Banach Space', expression: 'A complete normed vector space', description: 'Banach space definition' },
                        { name: 'Hilbert Space', expression: 'A complete inner product space', description: 'Hilbert space definition' },
                        { name: 'Cauchy-Schwarz (Hilbert)', expression: '|⟨x,y⟩| ≤ ||x||·||y||', description: 'Cauchy-Schwarz in Hilbert space' },
                        { name: 'Parallelogram Law', expression: '||x+y||²+||x-y||² = 2(||x||²+||y||²)', description: 'Parallelogram law' },
                        { name: 'Pythagorean Theorem', expression: 'If x⊥y then ||x+y||² = ||x||²+||y||²', description: 'Pythagoras in Hilbert space' },
                        { name: 'Uniform Boundedness', expression: 'If sup_α ||T_α x|| < ∞ ∀x, then sup_α ||T_α|| < ∞', description: 'Banach-Steinhaus theorem' },
                        { name: 'Open Mapping', expression: 'Bounded linear bijection between Banach spaces has bounded inverse', description: 'Open mapping theorem' },
                        { name: 'Closed Graph', expression: 'Linear T is bounded iff graph(T) is closed', description: 'Closed graph theorem' },
                        { name: 'Hahn-Banach', expression: 'Bounded linear functional on subspace extends to whole space with same norm', description: 'Hahn-Banach extension theorem' },
                        { name: 'Spectral Theorem', expression: 'Self-adjoint operator has spectral decomposition', description: 'Spectral theorem for self-adjoint operators' },
                        { name: 'Compact Operator', expression: 'T compact iff T maps bounded sets to precompact sets', description: 'Compact operator definition' },
                        { name: 'Fredholm Alternative', expression: 'If T compact, then λI-T is Fredholm of index 0', description: 'Fredholm alternative' },
                        { name: 'Lax-Milgram', expression: 'Bounded coercive bilinear form implies unique solution', description: 'Lax-Milgram theorem' },
                        { name: 'Stone-Weierstrass', expression: 'Subalgebra of C(X) that separates points and contains 1 is dense', description: 'Stone-Weierstrass approximation' },
                        { name: 'Arzela-Ascoli', expression: 'Equicontinuous bounded set in C(K) is precompact', description: 'Arzela-Ascoli theorem' },
                    ]
                }
            }
        },
        'tensors': {
            name: 'Tensor Calculus & Differential Geometry',
            description: 'Tensor operations, manifolds, and curvature',
            subcategories: {
                'tensors': {
                    name: 'Tensor Calculus',
                    formulas: [
                        { name: 'Tensor Definition', expression: 'T^{i₁...i_p}_{j₁...j_q} with transformation law', description: 'Tensor of type (p,q)' },
                        { name: 'Metric Tensor', expression: 'ds² = g_μν dx^μ dx^ν', description: 'Riemannian metric tensor' },
                        { name: 'Covariant Derivative', expression: '∇_μ V^ν = ∂_μ V^ν + Γ^ν_{μλ} V^λ', description: 'Covariant derivative of vector' },
                        { name: 'Christoffel Symbols', expression: 'Γ^μ_{αβ} = (1/2)g^{μν}(∂_α g_{βν}+∂_β g_{αν}-∂_ν g_{αβ})', description: 'Christoffel symbol of 2nd kind' },
                        { name: 'Riemann Tensor', expression: 'R^ρ_{σμν} = ∂_μ Γ^ρ_{νσ} - ∂_ν Γ^ρ_{μσ} + Γ^ρ_{μλ}Γ^λ_{νσ} - Γ^ρ_{νλ}Γ^λ_{μσ}', description: 'Riemann curvature tensor' },
                        { name: 'Ricci Tensor', expression: 'R_μν = R^λ_{μλν}', description: 'Ricci curvature tensor' },
                        { name: 'Scalar Curvature', expression: 'R = g^{μν}R_μν', description: 'Ricci scalar curvature' },
                        { name: 'Einstein Tensor', expression: 'G_μν = R_μν - (1/2)Rg_μν', description: 'Einstein curvature tensor' },
                        { name: 'Einstein Field Eq', expression: 'G_μν + Λg_μν = (8πG/c⁴)T_μν', description: 'Einstein field equations' },
                        { name: 'Riemann Normal Coords', expression: 'Coordinates where g_μν=η_μν and ∂g=0 at point', description: 'Riemann normal coordinates' },
                        { name: 'Killing Equation', expression: '∇_μ X_ν + ∇_ν X_μ = 0', description: 'Killing vector condition' },
                        { name: 'Lie Derivative', expression: 'L_X Y = [X,Y] = X^μ∂_μ Y^ν - Y^μ∂_μ X^ν', description: 'Lie derivative of vector field' },
                        { name: 'Geodesic Equation', expression: 'd²x^μ/dτ² + Γ^μ_{αβ}·dx^α/dτ·dx^β/dτ = 0', description: 'Geodesic equation on manifold' },
                        { name: 'Parallel Transport', expression: '∇_γ̇ V = 0 along curve γ', description: 'Parallel transport condition' },
                    ]
                },
                'manifolds': {
                    name: 'Differential Manifolds',
                    formulas: [
                        { name: 'Manifold Definition', expression: 'Hausdorff space locally homeomorphic to Rⁿ', description: 'Topological manifold' },
                        { name: 'Tangent Space', expression: 'T_pM = {derivations at p}', description: 'Tangent space at point' },
                        { name: 'Cotangent Space', expression: 'T^*_pM = dual of T_pM', description: 'Cotangent space' },
                        { name: 'Differential Form', expression: 'ω = f dx^{i₁}∧...∧dx^{i_k}', description: 'k-form definition' },
                        { name: 'Exterior Derivative', expression: 'dω = ∂f/∂x^j dx^j ∧ dx^{i₁}∧...∧dx^{i_k}', description: 'Exterior derivative of k-form' },
                        { name: 'Wed Product', expression: 'ω∧η = (-1)^{pq}η∧ω for p-form ω, q-form η', description: 'Wedge product anticommutativity' },
                        { name: 'Stokes Theorem (Forms)', expression: '∫_M dω = ∫_{∂M} ω', description: 'Generalized Stokes theorem' },
                        { name: 'd² = 0', expression: 'd(dω) = 0 for all forms ω', description: 'Exactness of exterior derivative' },
                        { name: 'Poincaré Lemma', expression: 'Closed form on contractible set is exact', description: 'Poincaré lemma' },
                        { name: 'Hodge Star', expression: '★: Ω^k → Ω^{n-k}', description: 'Hodge star operator' },
                        { name: 'Hodge Decomposition', expression: 'Ω^k = dΩ^{k-1} ⊕ δΩ^{k+1} ⊕ H^k', description: 'Hodge decomposition on compact manifold' },
                        { name: 'de Rham Cohomology', expression: 'H^k_{dR}(M) = ker(d_k)/im(d_{k-1})', description: 'de Rham cohomology groups' },
                        { name: 'Gauss-Bonnet', expression: '∫_M K dA = 2πχ(M) for compact 2-manifold', description: 'Gauss-Bonnet theorem' },
                        { name: 'Chern-Gauss-Bonnet', expression: '∫_M Pf(Ω) = (2π)^n χ(M)', description: 'Generalized Gauss-Bonnet-Chern' },
                        { name: 'Atiyah-Singer Index', expression: 'Index(D) = ∫_M ch(D) · Td(TM)', description: 'Atiyah-Singer index theorem' },
                    ]
                }
            }
        },
        'optimization': {
            name: 'Optimization',
            description: 'Mathematical optimization and operations research',
            subcategories: {
                'optimization': {
                    name: 'Optimization Theory',
                    formulas: [
                        { name: 'Linear Programming', expression: 'min c^Tx subject to Ax ≤ b, x ≥ 0', description: 'Standard LP form' },
                        { name: 'Dual LP', expression: 'max b^Ty subject to A^Ty ≥ c, y ≥ 0', description: 'Linear programming dual' },
                        { name: 'Strong Duality', expression: 'If both primal and dual are feasible, their optimal values coincide', description: 'Strong duality for LP' },
                        { name: 'KKT Conditions', expression: '∇f(x*) = Σ λ_i ∇g_i(x*) + Σ μ_j ∇h_j(x*) with complementarity', description: 'Karush-Kuhn-Tucker conditions' },
                        { name: 'Lagrangian', expression: 'L(x,λ,μ) = f(x) + Σ λ_i g_i(x) + Σ μ_j h_j(x)', description: 'Lagrange function' },
                        { name: 'Simplex Method', expression: 'Move along edges of feasible polytope to find optimum', description: 'Simplex algorithm' },
                        { name: 'Gradient Descent', expression: 'x_{k+1} = x_k - α∇f(x_k)', description: 'Basic gradient descent iteration' },
                        { name: 'Newton Method', expression: 'x_{k+1} = x_k - [Hf(x_k)]⁻¹∇f(x_k)', description: 'Newton optimization method' },
                        { name: 'Conjugate Gradient', expression: 'd_{k+1} = -∇f(x_{k+1}) + β_k d_k', description: 'Conjugate gradient method' },
                        { name: 'ADMM', expression: 'x^{k+1} = argmin L_ρ(x,z^k,λ^k); z^{k+1}=argmin L_ρ(x^{k+1},z,λ^k); λ^{k+1}=λ^k+ρ(Ax^{k+1}+Bz^{k+1}-c)', description: 'Alternating direction method of multipliers' },
                        { name: 'Stochastic GD', expression: 'θ := θ - α∇_θ L(f(x_i;θ), y_i) for random mini-batch i', description: 'Stochastic gradient descent' },
                        { name: 'Nesterov Momentum', expression: 'v_{k+1} = βv_k - α∇f(x_k+βv_k); x_{k+1}=x_k+v_{k+1}', description: 'Nesterov accelerated gradient' },
                        { name: 'Adam Optimizer', expression: 'm_k=β₁m_{k-1}+(1-β₁)g_k; v_k=β₂v_{k-1}+(1-β₂)g_k²; θ_{k+1}=θ_k-α·m_k/(√v_k+ε)', description: 'Adam optimization algorithm' },
                        { name: 'Lagrange Duality', expression: 'd(λ,μ) = inf_x L(x,λ,μ) ≤ f(x*)', description: 'Weak duality theorem' },
                        { name: 'Slater Condition', expression: '∃x: g_i(x)<0 ∀i, h_j(x)=0 ⇒ strong duality holds for convex problems', description: 'Slater constraint qualification' },
                        { name: 'Farkas Lemma', expression: 'Exactly one of {Ax≤b, x≥0} and {A^Ty≥0, b^Ty<0, y≥0} is feasible', description: 'Farkas lemma' },
                        { name: 'Lipschitz Continuity', expression: '|f(x)-f(y)| ≤ L||x-y||', description: 'Lipschitz condition' },
                        { name: 'Convex Function', expression: 'f(θx+(1-θ)y) ≤ θf(x)+(1-θ)f(y) for θ∈[0,1]', description: 'Convex function definition' },
                        { name: 'Jensen (Convex)', expression: 'f(Σ λ_i x_i) ≤ Σ λ_i f(x_i) for convex f with Σ λ_i=1', description: 'Jensen inequality for convex f' },
                        { name: 'Subgradient', expression: 'g ∈ ∂f(x) if f(y) ≥ f(x) + g^T(y-x) ∀y', description: 'Subgradient definition' },
                    ]
                }
            }
        },
        'discrete': {
            name: 'Discrete Mathematics',
            description: 'Discrete structures, recurrence relations, and generating functions',
            subcategories: {
                'recurrence': {
                    name: 'Recurrence Relations',
                    formulas: [
                        { name: 'Linear Homog Recur', expression: 'a_n = c₁a_{n-1} + ... + c_ka_{n-k}', description: 'Linear homogeneous recurrence' },
                        { name: 'Characteristic Eq', expression: 'r^k - c₁r^{k-1} - ... - c_k = 0', description: 'Recurrence characteristic equation' },
                        { name: 'Fibonacci Recurrence', expression: 'F_n = F_{n-1} + F_{n-2}', description: 'Fibonacci recurrence' },
                        { name: 'Tower of Hanoi', expression: 'T_n = 2T_{n-1} + 1, T_n = 2ⁿ - 1', description: 'Hanoi recurrence and solution' },
                        { name: 'Master Theorem', expression: 'T(n)=aT(n/b)+f(n), T(n)=Θ(n^{log_b a}) if f(n)=O(n^{log_b a-ε})', description: 'Master theorem for divide-and-conquer' },
                        { name: 'Master Case 2', expression: 'T(n)=Θ(n^{log_b a} log n) if f(n)=Θ(n^{log_b a})', description: 'Master theorem case 2' },
                        { name: 'Master Case 3', expression: 'T(n)=Θ(f(n)) if f(n)=Ω(n^{log_b a+ε}) and af(n/b)≤cf(n)', description: 'Master theorem case 3' },
                        { name: 'Generating Function', expression: 'G(x) = Σ a_n xⁿ', description: 'Ordinary generating function' },
                        { name: 'Exponential GF', expression: 'E(x) = Σ a_n xⁿ/n!', description: 'Exponential generating function' },
                        { name: 'GF for Fibonacci', expression: 'G(x) = x/(1-x-x²)', description: 'Generating function for Fibonacci' },
                        { name: 'GF for Catalan', expression: 'G(x) = (1-√(1-4x))/(2x)', description: 'Generating function for Catalan numbers' },
                        { name: 'Z-Transform', expression: 'X(z) = Σ x[n]z^{-n}', description: 'Z-transform definition' },
                    ]
                }
            }
        }
    },

    getAllFormulas: function() {
        let all = [];
        for (let cat in this.categories) {
            for (let sub in this.categories[cat].subcategories) {
                for (let f of this.categories[cat].subcategories[sub].formulas) {
                    all.push({
                        category: this.categories[cat].name,
                        subcategory: this.categories[cat].subcategories[sub].name,
                        name: f.name,
                        expression: f.expression,
                        description: f.description
                    });
                }
            }
        }
        return all;
    },

    getCount: function() {
        let count = 0;
        for (let cat in this.categories) {
            for (let sub in this.categories[cat].subcategories) {
                count += this.categories[cat].subcategories[sub].formulas.length;
            }
        }
        return count;
    },

    search: function(query) {
        query = query.toLowerCase();
        let results = [];
        for (let cat in this.categories) {
            for (let sub in this.categories[cat].subcategories) {
                for (let f of this.categories[cat].subcategories[sub].formulas) {
                    if (f.name.toLowerCase().includes(query) ||
                        f.expression.toLowerCase().includes(query) ||
                        f.description.toLowerCase().includes(query) ||
                        this.categories[cat].name.toLowerCase().includes(query) ||
                        this.categories[cat].subcategories[sub].name.toLowerCase().includes(query)) {
                        results.push({
                            category: this.categories[cat].name,
                            subcategory: this.categories[cat].subcategories[sub].name,
                            name: f.name,
                            expression: f.expression,
                            description: f.description
                        });
                    }
                }
            }
        }
        return results;
    },

    stories: {
        'Quadratic Formula': 'The quadratic formula has roots tracing back to ancient Babylon (c. 2000 BC). Babylonians solved quadratic equations using geometric methods. The modern algebraic form was developed by al-Khwarizmi in the 9th century. The formula as we know it today was formalized by Franois Viete in the 16th century, who introduced symbolic notation. Rene Descartes later standardized the notation in his 1637 work "La Geometrie." This formula is the foundation of algebra and appears in countless applications from physics to finance.',
        'Difference of Squares': 'This identity was known to Greek mathematicians like Euclid (c. 300 BC), who expressed it geometrically: the difference of two squares corresponds to the area of a rectangle. It appears in Euclid\'s "Elements" Book II, Proposition 5. The algebraic notation emerged in the 16th-17th centuries with the development of symbolic algebra. It remains one of the most fundamental factoring patterns, essential for simplifying algebraic expressions and solving equations.',
        'Sum of Cubes': 'Factoring sums and differences of cubes was studied by Islamic mathematicians during the Golden Age (8th-13th centuries). Omar Khayyam (1048-1131) developed geometric methods for solving cubic equations. The algebraic factorization was fully understood by Italian Renaissance mathematicians like Scipione del Ferro, who discovered the solution to depressed cubics around 1515, and Niccolò Tartaglia, who famously shared his cubic formula with Gerolamo Cardano under a vow of secrecy.',
        'Square of Sum': 'The binomial expansion (a+b) = a + 2ab + b was known to Greek mathematicians geometrically. Euclid\'s "Elements" Book II contains geometric proofs of these identities. The algebraic notation was developed by Franois Viete in the late 16th century. This identity is the first step toward understanding the binomial theorem, which was later generalized by Isaac Newton to include non-integer exponents in 1665.',
        'Binomial Theorem': 'The binomial theorem for positive integer exponents was known to Persian mathematician al-Karaji (c. 1000 AD). The triangular arrangement of binomial coefficients, now called Pascal\'s Triangle, was described in China by Yang Hui (c. 1261) and earlier by Omar Khayyam. Blaise Pascal published a detailed study in 1654. Isaac Newton generalized the theorem to fractional and negative exponents in 1665-1666 during his "annus mirabilis" at Woolsthorpe. Euler later extended it further.',
        'Euler Identity': 'Euler\'s identity e^(i) + 1 = 0 is often called the most beautiful equation in mathematics. Leonhard Euler published it in his 1748 work "Introductio in analysin infinitorum." It connects five fundamental constants: e (base of natural log), (pi, ratio of circumference to diameter), i (imaginary unit), 1 (multiplicative identity), and 0 (additive identity). Euler derived it from his formula e^(i) = cos + i sin, which he discovered through his work on complex numbers and infinite series.',
        'Pythagorean Theorem': 'The Pythagorean theorem is one of the oldest known mathematical results, dating back to Babylonian tablets from 1900-1600 BC. Named after the Greek mathematician Pythagoras (c. 570-495 BC), whose school proved it, though evidence suggests it was known earlier in China, India, and Egypt. Euclid provided a rigorous proof in Book I of his "Elements" (c. 300 BC). There are over 400 known proofs, including ones by President James Garfield and Leonardo da Vinci. It is the foundation of Euclidean geometry and trigonometry.',
        'Law of Sines': 'The law of sines was discovered by Islamic mathematicians in the 10th century. Abu Nasr Mansur (c. 1000 AD) and al-Biruni (973-1048) developed the law for spherical triangles first, then for planar triangles. The modern form was refined by European mathematicians like Johannes Mller (Regiomontanus) in his 1464 work "De triangulis omnimodis." It is essential for solving oblique triangles in surveying, navigation, and astronomy.',
        'Law of Cosines': 'The law of cosines generalizes the Pythagorean theorem to any triangle. Euclid\'s "Elements" Book II contains geometric versions of this law. The Persian mathematician al-Kashi (1380-1429) provided a clear statement in his "Key of Arithmetic." The modern algebraic form was developed by Franois Viete in the 16th century. It became crucial for surveying and astronomy, enabling the calculation of distances indirectly.',
        'Euler Formula': 'Euler\'s formula e^(i) = cos + i sin was discovered by Leonhard Euler in the 1740s and published in 1748. It is considered one of the most remarkable formulas in mathematics, bridging trigonometry and complex analysis. Euler was looking at infinite series expansions of exponential and trigonometric functions when he noticed the profound connection. The formula is essential in electrical engineering, quantum mechanics, and signal processing.',
        'Derivative Definition': 'The concept of the derivative was developed independently by Isaac Newton and Gottfried Wilhelm Leibniz in the 17th century. Newton called it the "fluxion" and used it in his 1687 "Principia Mathematica" to formulate his laws of motion. Leibniz developed the differential notation dy/dx still used today and published in 1684. Their priority dispute divided European mathematics for decades. The derivative became the foundation of calculus, essential for physics, engineering, and economics.',
        'Power Rule (Derivative)': 'The power rule for derivatives was discovered by Newton and Leibniz as part of their development of calculus in the 1660s-1670s. Newton used it to compute areas under curves and rates of change. The general form d/dx(x) = nx was formalized by Leibniz. This rule is fundamental to differential calculus and is taught to millions of students worldwide as one of the first rules of differentiation.',
        'Power Rule (Integral)': 'The integral power rule is the inverse of the derivative power rule. Newton and Leibniz independently discovered the Fundamental Theorem of Calculus, which connects integration and differentiation. The formula x dx = x/(n+1) + C (for n -1) was formalized through their work. This rule allows computing areas, volumes, and accumulated quantities.',
        'Fundamental Theorem of Calculus': 'The Fundamental Theorem of Calculus was discovered by Isaac Newton and Gottfried Wilhelm Leibniz independently in the 1660s-1670s. Newton first stated it in his 1666 manuscript "De analysi per aequationes numero terminorum infinitas." Leibniz published his version in 1684. The theorem connects differentiation and integration as inverse operations, unifying the two branches of calculus. It revolutionized mathematics, physics, and engineering.',
        'Taylor Series': 'The Taylor series was named after Brook Taylor, who published the general method in his 1715 work "Methodus Incrementorum Directa et Inversa." However, the concept was anticipated by James Gregory (1671) and Johann Bernoulli. Taylor\'s work built on Newton\'s finite difference method. The series allows approximating any smooth function as a power series, essential for numerical analysis, physics, and engineering. Maclaurin series are a special case for expansions around zero.',
        'Fourier Series': 'Joseph Fourier introduced Fourier series in his 1822 work "Thorie analytique de la chaleur" (Analytical Theory of Heat). He showed that any periodic function can be expressed as a sum of sine and cosine functions. Initially controversial, the idea revolutionized mathematics and physics. Fourier series became essential for solving heat equation, wave equation, and is fundamental to signal processing, acoustics, and quantum mechanics.',
        'Sine Series': 'The Maclaurin series for sine was known to Indian mathematician Madhava of Sangamagrama (c. 1400) who discovered the series expansion for sine, cosine, and arctangent. These were rediscovered by James Gregory (1671) and published by Colin Maclaurin in his 1742 "Treatise of Fluxions." The series shows that sine is an odd function with alternating terms, converging for all real x.',
        'L\'Hopital Rule': 'The L\'Hopital rule is named after Guillaume de l\'Hpital, a French mathematician who published it in his 1696 book "Analyse des Infiniment Petits," the first textbook on calculus. However, the rule was actually discovered by Johann Bernoulli, who had shared it with l\'Hpital under a financial arrangement. The rule provides a method for evaluating limits of indeterminate forms like 0/0 and / by comparing derivatives.',
        'Chain Rule': 'The chain rule was discovered by Gottfried Wilhelm Leibniz in the 1670s during his development of calculus. He expressed it in his differential notation as dy/dx = dy/du du/dx. Newton independently discovered it in his fluxion notation. The chain rule is fundamental for differentiating composite functions and is essential in machine learning through backpropagation in neural networks.',
        'Integration by Parts': 'Integration by parts was discovered by Brook Taylor in 1715, building on the work of Leibniz on product differentiation. The formula u dv = uv - v du is derived from the product rule for derivatives. It is one of the most versatile integration techniques, used for integrals involving products of functions like x e, ln x, and trigonometric functions.',
        'Green\'s Theorem': 'George Green published Green\'s theorem in his 1828 essay "An Essay on the Application of Mathematical Analysis to the Theories of Electricity and Magnetism," published privately. Green was a self-taught mathematician who worked as a miller in Nottingham, England. His theorem relates line integrals around closed curves to double integrals over the enclosed region. It is a special case of Stokes\' theorem and fundamental to vector calculus.',
        'Stokes\' Theorem': 'Stokes\' theorem is named after Sir George Gabriel Stokes (1819-1903), but it was actually discovered by William Thomson (Lord Kelvin) in a letter to Stokes in 1850. Stokes included it as an exam problem at Cambridge, and it became associated with his name. The theorem generalizes the Fundamental Theorem of Calculus to surfaces in 3D space, relating surface integrals of curl to line integrals of the boundary.',
        'Divergence Theorem': 'The divergence theorem was discovered by Carl Friedrich Gauss in 1813 and independently by Mikhail Ostrogradsky in 1826. Gauss used it in his work on electrostatics. The theorem relates the flux of a vector field through a closed surface to the divergence of the field within the volume. It is fundamental in fluid dynamics, electromagnetism, and in proving conservation laws.',
        'Euler-Lagrange Equation': 'The Euler-Lagrange equation was developed by Leonhard Euler (1744) and Joseph-Louis Lagrange (1755) based on the calculus of variations. Euler initially used geometric methods; Lagrange proposed the purely analytic method at age 19 in a letter to Euler. The equation finds functions that extremize functionals, essential in classical mechanics (Lagrangian mechanics), quantum field theory, and general relativity.',
        'Laplace Transform': 'Pierre-Simon Laplace introduced the Laplace transform in his 1782 work on probability theory, though he first used it in 1744. The transform converts differential equations into algebraic equations, making them easier to solve. It was later systematized by Oliver Heaviside in the late 19th century for solving electrical circuit problems. Today it is essential in control theory, signal processing, and differential equations.',
        'Matrix Multiplication': 'Matrix multiplication was developed by Arthur Cayley in 1858 in his "Memoir on the Theory of Matrices." Cayley defined matrix operations and showed how they represent linear transformations. The dot product definition (AB)_ij = k A_ik B_kj emerged from the composition of linear transformations. Matrix multiplication became fundamental to quantum mechanics (Heisenberg\'s matrix mechanics, 1925), computer graphics, and machine learning.',
        'Eigenvalue Equation': 'The eigenvalue equation Av = v was studied by Euler, Lagrange, and Laplace in the 18th century, but the term "eigenvalue" (German for "own value") was introduced by David Hilbert in 1904. The theory was formalized by Hilbert and Richard Courant in their 1924 book "Methoden der mathematischen Physik." Eigenvalues are fundamental to quantum mechanics (observables as Hermitian operators), vibration analysis, and principal component analysis.',
        'Cayley-Hamilton Theorem': 'The Cayley-Hamilton theorem states that every square matrix satisfies its own characteristic equation. It was proved by Arthur Cayley in 1858 for 2x2 and 3x3 matrices and generalized by William Rowan Hamilton in the context of quaternions. The theorem is fundamental in linear algebra and has applications in control theory and differential equations.',
        'Gaussian Elimination': 'Gaussian elimination is named after Carl Friedrich Gauss (1777-1855), who used it for calculating planetary orbits. However, the method was described in the Chinese mathematical text "The Nine Chapters on the Mathematical Art" (c. 150 BC). Gauss developed it independently for least squares estimation. The method systematically solves linear systems by transforming them to row-echelon form.',
        'Euclidean Algorithm': 'The Euclidean algorithm for finding GCD is described in Euclid\'s "Elements" Book VII (c. 300 BC), making it one of the oldest algorithms still in common use. The algorithm repeatedly applies gcd(a,b) = gcd(b, a mod b) until the remainder is zero. It is the foundation of number theory and modern cryptography (RSA).',
        'Fermat\'s Little Theorem': 'Pierre de Fermat stated this theorem in 1640 in a letter to his friend Frnin de Bessy. He wrote "I would send you the proof, but I fear it\'s too long." The first published proof was by Euler in 1736. The theorem states that for prime p and integer a not divisible by p, a a (mod p). It is fundamental to RSA encryption and primality testing.',
        'Chinese Remainder Theorem': 'The Chinese Remainder Theorem was first described by the Chinese mathematician Sun Tzu in the 3rd century AD in his work "Sunzi Suanjing." The theorem solves systems of congruences with coprime moduli. It was later generalized by Euler and Gauss. Today it is essential in cryptography (RSA decryption) and computer arithmetic.',
        'Fundamental Theorem of Arithmetic': 'The Fundamental Theorem of Arithmetic states that every integer greater than 1 can be uniquely factored into primes. Euclid proved the existence of prime factorization in his "Elements" (c. 300 BC), but the uniqueness was not fully proved until Gauss in his 1801 "Disquisitiones Arithmeticae." This theorem is the foundation of all number theory.',
        'Prime Number Theorem': 'The Prime Number Theorem was conjectured by Gauss in 1792 at age 15, based on studying prime tables. It was also conjectured by Legendre in 1798. The theorem states that (x) ~ x/ln x, where (x) is the number of primes x. It was finally proved independently by Jacques Hadamard and Charles de la Valle-Poussin in 1896, using complex analysis of the Riemann zeta function.',
        'Goldbach Conjecture': 'Christian Goldbach proposed his famous conjecture in a 1742 letter to Leonhard Euler: every even integer greater than 2 can be expressed as the sum of two primes. Despite being verified up to 4 10 by computer, it remains unproven. It is one of the oldest unsolved problems in mathematics. A related conjecture (weak Goldbach) that every odd number > 5 is sum of three primes was proved in 2013 by Harald Helfgott.',
        'Riemann Hypothesis': 'Bernhard Riemann proposed the Riemann Hypothesis in his groundbreaking 1859 paper "On the Number of Primes Less Than a Given Magnitude." The hypothesis states that all nontrivial zeros of the Riemann zeta function have real part 1/2. It is one of seven Millennium Prize Problems (worth $1 million). Despite extensive computational verification for trillions of zeros, it remains unproven since 1859.',
        'Basel Problem': 'The Basel problem asked for the sum of 1/n. Pietro Mengoli proposed it in 1644. Many mathematicians including Leibniz, the Bernoulli brothers, and Stirling failed to solve it. Leonhard Euler solved it in 1734, astonishing the mathematical world by finding the sum to be /6. This result launched Euler\'s career and showed the deep connection between infinite series and geometry.',
        'Cauchy-Schwarz Inequality': 'The Cauchy-Schwarz inequality was first proved by Augustin-Louis Cauchy in 1821 for sums (finite-dimensional case). Hermann Schwarz generalized it to integrals in 1885, and Viktor Bunyakovsky contributed to its development. The inequality states |u·v| |u||v| and is fundamental to linear algebra, probability theory, and quantum mechanics.',
        'Heisenberg Uncertainty Principle': 'Werner Heisenberg formulated the uncertainty principle in 1927, during the development of quantum mechanics. He was analyzing the mathematical structure of quantum theory and realized that certain pairs of physical properties (like position and momentum) cannot be simultaneously measured with arbitrary precision. The principle is not about measurement limitations but reflects the wave-particle duality of quantum systems. It is expressed mathematically as x p /2, where is the reduced Planck constant.',
        'Schrdinger Equation': 'Erwin Schrdinger formulated his famous equation in 1926, during a revolutionary period in physics. Inspired by de Broglie\'s matter wave hypothesis and Hamilton\'s optical-mechanical analogy, Schrdinger developed wave mechanics. The time-dependent equation i/t = H describes how quantum systems evolve. Schrdinger was initially discouraged that the equation gave the correct energy levels for hydrogen. For this work, he shared the 1933 Nobel Prize with Paul Dirac.',
        'Planck Relation': 'Max Planck introduced the relation E = hf in 1900, marking the birth of quantum mechanics. He was studying blackbody radiation and made the radical assumption that energy is quantized, meaning it can only be emitted or absorbed in discrete packets he called "quanta." Planck was initially uncomfortable with this idea, considering it a mathematical trick. The constant h (Planck\'s constant) became one of the most fundamental constants in physics.',
        'de Broglie Wavelength': 'Louis de Broglie proposed in his 1924 PhD thesis that particles have wave-like properties with wavelength = h/p. This was a bold extension of Einstein\'s photon concept to all matter. Einstein praised the idea, and it was experimentally confirmed by the Davisson-Germer experiment (1927), showing electron diffraction. De Broglie won the 1929 Nobel Prize for his discovery.',
        'Infinite Square Well': 'The infinite square well is a fundamental model in quantum mechanics, first analyzed by Schrdinger in 1926. It demonstrates the quantization of energy that occurs when a particle is confined to a region. The solution shows that only specific energy levels E = nh/(8mL) are allowed, with wave functions forming standing waves. This model illustrates the basic principles of quantum confinement in nanostructures.',
        'Bohr Model Energy': 'Niels Bohr proposed his atomic model in 1913, combining Rutherford\'s nuclear atom with Planck\'s quantum hypothesis. He postulated that electrons orbit the nucleus in discrete energy levels without radiating energy. The formula E = -13.6 eV/n gave the correct hydrogen spectrum, explaining the Balmer series. Bohr won the 1922 Nobel Prize. His model, while superseded by quantum mechanics, remains an important conceptual tool.',
        'Planck Radiation Law': 'Max Planck derived the blackbody radiation law in 1900, solving the "ultraviolet catastrophe" that had plagued classical physics. He assumed that radiation energy is quantized as E = nhf, a revolutionary concept. Planck\'s formula u(,T) = 8hc/((e -1)) exactly matches experimental data. This discovery is considered the birth of quantum mechanics.',
        'Stefan-Boltzmann Law': 'Josef Stefan experimentally discovered the P = T relation in 1879, and his student Ludwig Boltzmann derived it theoretically in 1884 using thermodynamics. The law states that the total energy radiated by a blackbody is proportional to the fourth power of its temperature. It is essential for understanding stellar radiation, climate science, and thermal engineering.',
        'E = mc': 'Albert Einstein derived the mass-energy equivalence E = mc in his 1905 "annus mirabilis" paper "Does the Inertia of a Body Depend Upon Its Energy Content?" as a consequence of special relativity. This paper was published just months after his paper on special relativity. The formula shows that mass and energy are interchangeable, with the speed of light squared (c) as the conversion factor. It explained the energy source of stars (nuclear fusion) and led to nuclear power and weapons. Einstein called it his most important contribution.',
        'Special Relativity - Lorentz Factor': 'The Lorentz factor = 1/(1-v/c) was introduced by Hendrik Lorentz in 1904 as part of his electron theory. Einstein rederived it from first principles in his 1905 special relativity paper, showing it follows from the postulates that physics is the same in all inertial frames and the speed of light is constant. The factor describes time dilation, length contraction, and relativistic mass increase.',
        'General Relativity - Einstein Field Eq': 'Einstein presented the field equations of general relativity in November 1915 after nearly a decade of intense work. He struggled with tensor mathematics, learning it from his friend Marcel Grossmann. The equations G = 8GT/c describe how matter and energy curve spacetime. The 1919 solar eclipse expedition by Eddington confirmed the prediction of light bending, making Einstein a global celebrity.',
        'Schwarzschild Radius': 'Karl Schwarzschild derived the exact solution to Einstein\'s field equations in 1916 while serving on the Russian front during World War I. He submitted the paper from the battlefield and died shortly after from pemphigus. The Schwarzschild radius r = 2GM/c defines the event horizon of a non-rotating black hole. Schwarzschild\'s solution was the first exact solution to the Einstein equations.',
        'Hawking Radiation': 'Stephen Hawking derived in 1974 that black holes emit radiation due to quantum effects near the event horizon. The temperature T = c/(8GMk) is inversely proportional to the black hole\'s mass. This discovery unified quantum mechanics, general relativity, and thermodynamics. Hawking initially doubted his own result, then embraced it as a major breakthrough.',
        'Maxwell\'s Equations': 'James Clerk Maxwell unified electricity and magnetism in his 1865 paper "A Dynamical Theory of the Electromagnetic Field." He added the displacement current term to Ampere\'s law, which predicted electromagnetic waves traveling at the speed of light. This led directly to the theory that light is an electromagnetic wave. Maxwell\'s equations are considered the "second great unification" in physics after Newton\'s.',
        'Faraday\'s Law': 'Michael Faraday discovered electromagnetic induction in 1831 through brilliant experimental work, despite having little formal education. He found that a changing magnetic field induces an electric current. The mathematical formulation = -d/dt was given by James Clerk Maxwell in 1855. Faraday\'s discovery led to electric generators, transformers, and the entire electrical power industry.',
        'Coulomb\'s Law': 'Charles-Augustin de Coulomb published the inverse-square law of electrostatic force in 1785 using his torsion balance experiment. The law F = kqq/r describes the force between charged particles. Coulomb\'s work established electrostatics as a quantitative science, building on earlier work by Priestley and Cavendish.',
        'Ohm\'s Law': 'Georg Ohm published his law V = IR in 1827 in his book "Die galvanische Kette, mathematisch bearbeitet" (The Galvanic Circuit Investigated Mathematically). The relationship between voltage, current, and resistance was initially met with hostility because it seemed too simple. Ohm had to resign his teaching position. The law later became fundamental to electrical engineering.',
        'Newton\'s Second Law': 'Isaac Newton published his three laws of motion in his monumental 1687 work "Philosophi Naturalis Principia Mathematica" (Mathematical Principles of Natural Philosophy). The second law F = ma (originally expressed as F = dp/dt) states that force equals mass times acceleration. The Principia is considered one of the most important scientific works ever written. Newton\'s laws formed the foundation of classical mechanics for over 200 years until Einstein\'s relativity.',
        'Newton\'s Law of Universal Gravitation': 'Newton published the law of universal gravitation in 1687 in his Principia. The story goes that he was inspired by watching an apple fall at his family estate at Woolsthorpe. He realized the same force that pulls the apple to Earth also holds the Moon in orbit. The law F = Gm m/r explained planetary orbits (Kepler\'s laws), ocean tides, and projectile motion under a single framework.',
        'Bernoulli\'s Equation': 'Daniel Bernoulli published his principle of fluid dynamics in his 1738 book "Hydrodynamica." The equation P + v + gh = constant describes energy conservation in flowing fluids. Bernoulli was part of the famous Bernoulli family of mathematicians from Basel, Switzerland, which produced eight notable mathematicians across three generations.',
        'Archimedes\' Principle': 'Archimedes of Syracuse (287-212 BC) discovered his principle while stepping into a bath and noticing the water rise. According to legend, he ran naked through the streets shouting "Eureka!" (I have found it!). The principle states that the buoyant force on a submerged object equals the weight of displaced fluid. It is one of the oldest and most important laws of physics.',
        'Navier-Stokes Equations': 'Claude-Louis Navier derived the equations for viscous fluid flow in 1822. George Gabriel Stokes refined them in 1845. The equations describe how velocity, pressure, temperature, and density of a moving fluid are related. The Clay Mathematics Institute lists the Navier-Stokes existence and smoothness problem as one of seven Millennium Prize Problems ($1 million for solving it).',
        'Shannon Entropy': 'Claude Shannon introduced information entropy in his 1948 paper "A Mathematical Theory of Communication." The formula H = - p(x) log p(x) measures the uncertainty in a random variable. Shannon\'s work founded information theory, which is the basis for digital communication, data compression (zip, mp3, jpeg), and cryptography. Shannon called it "entropy" because of its similarity to Boltzmann\'s formula in thermodynamics.',
        'Bayes\' Theorem': 'Thomas Bayes (1701-1761) formulated his theorem in an essay published posthumously in 1763 by his friend Richard Price. Bayes was a Presbyterian minister and mathematician. His theorem describes how to update probabilities based on evidence. Bayesian statistics has experienced a renaissance with modern computing and is fundamental to machine learning, spam filters, and medical diagnosis.',
        'Central Limit Theorem': 'The Central Limit Theorem was first stated by Abraham de Moivre in 1733 for the special case of coin flips. Pierre-Simon Laplace generalized it in 1810. The theorem states that the sum (or average) of independent random variables approximates a normal distribution, regardless of their original distribution. It is the foundation of statistical inference, enabling confidence intervals and hypothesis testing.',
        'Law of Large Numbers': 'Jakob Bernoulli published the Law of Large Numbers in his posthumous 1713 work "Ars Conjectandi" (The Art of Conjecturing). The theorem states that as the number of trials increases, the sample average converges to the expected value. Bernoulli proved the weak version; Simeon Poisson and Pafnuty Chebyshev later extended it. It is the theoretical foundation of insurance, polling, and Monte Carlo methods.',
        'Fibonacci Sequence': 'Leonardo Pisano Fibonacci (c. 1170-1250) introduced the Fibonacci sequence to Europe in his 1202 book "Liber Abaci." He used the rabbit population problem to illustrate it. However, the sequence was described earlier by Indian mathematicians (Virahanka, c. 700 AD; Hemachandra, c. 1150). Fibonacci numbers appear throughout nature: in sunflower seed spirals, pinecones, nautilus shells, and galaxy arms.',
        'Golden Ratio': 'The golden ratio = (1+5)/2 1.618 has been known since ancient times. Euclid described it in his "Elements" (c. 300 BC) as the "extreme and mean ratio." The Parthenon in Athens, Leonardo da Vinci\'s "Vitruvian Man," and Salvador Dali\'s "The Sacrament of the Last Supper" feature the golden ratio. It appears in the Fibonacci sequence as the limit of consecutive ratios. The irrational number is also connected to Penrose tilings.',
        'Gauss\'s Law': 'Carl Friedrich Gauss formulated Gauss\'s law in 1835, relating electric flux through a closed surface to the enclosed charge. Gauss was a child prodigy who made contributions to number theory, statistics, differential geometry, and physics. He called mathematics the "queen of sciences." Gauss\'s law is one of Maxwell\'s four equations and fundamental to electromagnetism.',
        'Hooke\'s Law': 'Robert Hooke published his law of elasticity F = -kx in 1660, describing how springs stretch proportionally to applied force. Hooke was a brilliant experimental scientist and curator of experiments for the Royal Society. He had a famously contentious relationship with Isaac Newton. Hooke\'s law is the basis for all elastic materials, seismology, and mechanical engineering.',
        'Doppler Effect': 'Christian Doppler proposed the Doppler effect in 1842 for sound waves, hypothesizing that the pitch of a sound changes with relative motion. He tested it using musicians playing trumpets on a moving train. The effect was confirmed for light by Hippolyte Fizeau. The Doppler effect is used in radar guns, astronomy (redshift of galaxies), ultrasound imaging, and weather forecasting.',
    },

    getFormulaStory: function(formulaName) {
        if (!formulaName) return null;
        if (this.stories[formulaName]) {
            return this.stories[formulaName];
        }
        for (let cat in this.categories) {
            for (let sub in this.categories[cat].subcategories) {
                for (let f of this.categories[cat].subcategories[sub].formulas) {
                    if (f.name === formulaName) {
                        return 'The "' + f.name + '" is a fundamental formula in ' + this.categories[cat].name + '. ' +
                               f.description + '. This formula has been used by mathematicians and scientists for centuries, ' +
                               'appearing in textbooks, research papers, and practical applications. It represents a key insight ' +
                               'that helps us understand the mathematical structure of our world.';
                    }
                }
            }
        }
        return 'No detailed story available for "' + formulaName + '". It is part of the extensive formula database of MathPhys WebOS.';
    }
};

window.MATH = MATH;
