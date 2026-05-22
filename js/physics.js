const PHYSICS = {
    categories: {
        'mechanics': {
            name: 'Classical Mechanics',
            description: 'Newtonian mechanics, kinematics, dynamics, and conservation laws',
            subcategories: {
                'kinematics': {
                    name: 'Kinematics',
                    formulas: [
                        { name: 'Velocity', expression: 'v = dx/dt', description: 'Instantaneous velocity definition' },
                        { name: 'Acceleration', expression: 'a = dv/dt = d²x/dt²', description: 'Instantaneous acceleration' },
                        { name: 'Constant Acceleration 1', expression: 'v = v₀ + at', description: 'Velocity under constant acceleration' },
                        { name: 'Constant Acceleration 2', expression: 'x = x₀ + v₀t + ½at²', description: 'Position under constant acceleration' },
                        { name: 'Constant Acceleration 3', expression: 'v² = v₀² + 2a(x-x₀)', description: 'Torricelli equation' },
                        { name: 'Constant Acceleration 4', expression: 'x = x₀ + ½(v+v₀)t', description: 'Average velocity displacement' },
                        { name: 'Relative Velocity', expression: 'v_AB = v_AC + v_CB', description: 'Galilean relative velocity' },
                        { name: 'Projectile Range', expression: 'R = (v₀² sin 2θ)/g', description: 'Horizontal range of projectile' },
                        { name: 'Projectile Height', expression: 'H = (v₀² sin²θ)/(2g)', description: 'Maximum projectile height' },
                        { name: 'Projectile Time', expression: 'T = (2v₀ sin θ)/g', description: 'Time of flight' },
                        { name: 'Uniform Circular Motion', expression: 'a_c = v²/r = ω²r', description: 'Centripetal acceleration' },
                        { name: 'Angular Velocity', expression: 'ω = dθ/dt', description: 'Angular velocity definition' },
                        { name: 'Angular Acceleration', expression: 'α = dω/dt', description: 'Angular acceleration definition' },
                        { name: 'Linear to Angular', expression: 'v = ωr, a_t = αr', description: 'Relationship between linear and angular' },
                        { name: 'Constant Angular Accel', expression: 'θ = θ₀ + ω₀t + ½αt²', description: 'Angular displacement' },
                        { name: 'Centripetal Force', expression: 'F_c = mv²/r = mω²r', description: 'Centripetal force required' },
                    ]
                },
                'dynamics': {
                    name: 'Dynamics & Newton\'s Laws',
                    formulas: [
                        { name: 'Newton 1st Law', expression: 'ΣF = 0 ⇒ v = constant', description: 'Law of inertia' },
                        { name: 'Newton 2nd Law', expression: 'F = ma = dp/dt', description: 'Fundamental equation of motion' },
                        { name: 'Newton 3rd Law', expression: 'F_AB = -F_BA', description: 'Action-reaction principle' },
                        { name: 'Weight', expression: 'W = mg', description: 'Gravitational force on mass' },
                        { name: 'Friction Static', expression: 'f_s ≤ μ_s N', description: 'Static friction force' },
                        { name: 'Friction Kinetic', expression: 'f_k = μ_k N', description: 'Kinetic friction force' },
                        { name: 'Spring Force', expression: 'F = -kx', description: 'Hooke law for ideal spring' },
                        { name: 'Drag Force', expression: 'F_d = ½ρv²C_dA', description: 'Quadratic drag force' },
                        { name: 'Stokes Drag', expression: 'F_d = 6πηrv', description: 'Low Reynolds number drag' },
                        { name: 'Normal Force', expression: 'N = mg cos θ on incline', description: 'Normal force on inclined plane' },
                        { name: 'Tension in String', expression: 'T = m(g ± a) for hanging mass', description: 'String tension' },
                        { name: 'Banked Curve', expression: 'tan θ = v²/(rg)', description: 'Banking angle for frictionless turn' },
                        { name: 'Incline Acceleration', expression: 'a = g(sin θ - μ cos θ)', description: 'Acceleration on incline with friction' },
                        { name: 'Atwood Machine', expression: 'a = (m₁-m₂)g/(m₁+m₂)', description: 'Atwood machine acceleration' },
                        { name: 'Impulse', expression: 'J = ∫ F dt = Δp', description: 'Impulse-momentum theorem' },
                        { name: 'Momentum Conservation', expression: 'm₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'', description: 'Conservation of momentum' },
                        { name: 'Elastic Collision 1D', expression: 'v₁\' = (m₁-m₂)v₁/(m₁+m₂) + 2m₂v₂/(m₁+m₂)', description: '1D elastic collision final velocities' },
                        { name: 'Inelastic Collision', expression: 'v\' = (m₁v₁+m₂v₂)/(m₁+m₂)', description: 'Perfectly inelastic collision' },
                        { name: 'Coefficient of Restitution', expression: 'e = (v₂\'-v₁\')/(v₁-v₂)', description: 'Elasticity of collisions' },
                        { name: 'Center of Mass', expression: 'R_cm = (Σ m_i r_i) / M', description: 'Center of mass calculation' },
                    ]
                },
                'work_energy': {
                    name: 'Work & Energy',
                    formulas: [
                        { name: 'Work', expression: 'W = F·d = Fd cos θ', description: 'Work by constant force' },
                        { name: 'Work (Variable Force)', expression: 'W = ∫ F·dr', description: 'Work by variable force' },
                        { name: 'Kinetic Energy', expression: 'K = ½mv²', description: 'Kinetic energy of translation' },
                        { name: 'Work-Energy Theorem', expression: 'W_net = ΔK = ½mv₂² - ½mv₁²', description: 'Work-energy principle' },
                        { name: 'Gravitational Potential', expression: 'U_g = mgh', description: 'Near-Earth gravitational PE' },
                        { name: 'Spring Potential', expression: 'U_s = ½kx²', description: 'Elastic potential energy' },
                        { name: 'Gravitational PE General', expression: 'U = -GMm/r', description: 'Newtonian gravitational potential' },
                        { name: 'Mechanical Energy Conservation', expression: 'ΔE = ΔK + ΔU = 0 (no nonconservative forces)', description: 'Conservation of mechanical energy' },
                        { name: 'Power', expression: 'P = dW/dt = F·v', description: 'Instantaneous power' },
                        { name: 'Average Power', expression: 'P_avg = W/Δt', description: 'Average power over time' },
                        { name: 'Efficiency', expression: 'η = W_out/W_in × 100%', description: 'Energy conversion efficiency' },
                        { name: 'Nonconservative Work', expression: 'W_nc = ΔK + ΔU', description: 'Work by nonconservative forces' },
                    ]
                },
                'rotational': {
                    name: 'Rotational Mechanics',
                    formulas: [
                        { name: 'Torque', expression: 'τ = r × F = rF sin θ', description: 'Torque definition' },
                        { name: 'Moment of Inertia', expression: 'I = Σ m_i r_i² = ∫ r² dm', description: 'Moment of inertia definition' },
                        { name: 'Thin Hoop/Ring', expression: 'I = MR²', description: 'Moment of inertia: hoop about center' },
                        { name: 'Solid Disk/Cylinder', expression: 'I = ½MR²', description: 'Moment of inertia: disk about axis' },
                        { name: 'Solid Sphere', expression: 'I = ⅖MR²', description: 'Moment of inertia: solid sphere' },
                        { name: 'Spherical Shell', expression: 'I = ⅔MR²', description: 'Moment of inertia: thin spherical shell' },
                        { name: 'Thin Rod (Center)', expression: 'I = (1/12)ML²', description: 'Moment of inertia: rod about center' },
                        { name: 'Thin Rod (End)', expression: 'I = (1/3)ML²', description: 'Moment of inertia: rod about end' },
                        { name: 'Parallel Axis Theorem', expression: 'I = I_cm + Md²', description: 'Parallel axis theorem' },
                        { name: 'Perpendicular Axis', expression: 'I_z = I_x + I_y (for planar body)', description: 'Perpendicular axis theorem' },
                        { name: 'Rotational Newton 2nd', expression: 'τ_net = Iα', description: 'Newton second law for rotation' },
                        { name: 'Rotational Kinetic Energy', expression: 'K_rot = ½Iω²', description: 'Rotational kinetic energy' },
                        { name: 'Angular Momentum', expression: 'L = Iω = r × p', description: 'Angular momentum definition' },
                        { name: 'Angular Momentum Cons.', expression: 'τ_net = 0 ⇒ L = constant', description: 'Conservation of angular momentum' },
                        { name: 'Rolling Without Slipping', expression: 'v_cm = ωR', description: 'Rolling condition' },
                        { name: 'Rolling Kinetic Energy', expression: 'K = ½mv² + ½Iω²', description: 'Total KE of rolling object' },
                        { name: 'Rotational Power', expression: 'P = τω', description: 'Power in rotational motion' },
                        { name: 'Precession Rate', expression: 'Ω = τ/L = mgr/(Iω)', description: 'Gyroscopic precession frequency' },
                    ]
                },
                'gravity': {
                    name: 'Gravitation',
                    formulas: [
                        { name: 'Newton Gravity Law', expression: 'F = G·m₁m₂/r²', description: 'Universal gravitation' },
                        { name: 'Gravitational Constant', expression: 'G = 6.67430×10⁻¹¹ N·m²/kg²', description: 'Newton gravitational constant' },
                        { name: 'Kepler 1st Law', expression: 'Planets orbit in ellipses with Sun at one focus', description: 'Kepler first law' },
                        { name: 'Kepler 2nd Law', expression: 'Areal velocity is constant dA/dt = L/(2m)', description: 'Kepler second law' },
                        { name: 'Kepler 3rd Law', expression: 'T² = (4π²/GM)a³', description: 'Kepler third law (period-semi-major axis)' },
                        { name: 'Orbital Velocity', expression: 'v = √(GM/r)', description: 'Circular orbital speed' },
                        { name: 'Escape Velocity', expression: 'v_esc = √(2GM/R)', description: 'Escape velocity from celestial body' },
                        { name: 'Gravitational Field', expression: 'g = GM/r²', description: 'Gravitational field strength' },
                        { name: 'Gravitational Potential', expression: 'V = -GM/r', description: 'Gravitational potential' },
                        { name: 'Gauss Law for Gravity', expression: '∮ g·dA = -4πGM_enc', description: 'Gravitational Gauss law' },
                        { name: 'Tidal Force', expression: 'F_tide ≈ 2GMmR/r³', description: 'Tidal force approximation' },
                        { name: 'Lagrange Points', expression: 'L₁, L₂, L₃ collinear; L₄, L₅ triangular', description: 'Lagrange point locations' },
                        { name: 'Vis-viva Equation', expression: 'v² = GM(2/r - 1/a)', description: 'Orbital velocity from position and semi-major axis' },
                        { name: 'Hohmann Transfer', expression: 'Δv = √(GM/r₁)(√(2r₂/(r₁+r₂))-1) + √(GM/r₂)(1-√(2r₁/(r₁+r₂)))', description: 'Hohmann transfer delta-v' },
                        { name: 'Roche Limit', expression: 'd = R·(2ρ_M/ρ_m)^(1/3)', description: 'Roche limit for tidal disruption' },
                    ]
                },
                'oscillations': {
                    name: 'Oscillations & Waves',
                    formulas: [
                        { name: 'Simple Harmonic Motion', expression: 'F = -kx, x(t) = A cos(ωt+φ)', description: 'SHM equation and solution' },
                        { name: 'Angular Frequency SHM', expression: 'ω = √(k/m)', description: 'Spring-mass angular frequency' },
                        { name: 'Period SHM', expression: 'T = 2π√(m/k)', description: 'Simple harmonic oscillator period' },
                        { name: 'Simple Pendulum', expression: 'T = 2π√(L/g)', description: 'Small-angle pendulum period' },
                        { name: 'Physical Pendulum', expression: 'T = 2π√(I/mgd)', description: 'Physical pendulum period' },
                        { name: 'Torsional Pendulum', expression: 'T = 2π√(I/κ)', description: 'Torsion pendulum period' },
                        { name: 'Damped Oscillation', expression: 'F = -kx - bv, x = Ae^{-bt/2m}cos(ω\'t+φ)', description: 'Damped harmonic motion' },
                        { name: 'Damping Ratio', expression: 'ζ = b/(2√(mk))', description: 'Damping ratio definition' },
                        { name: 'Critical Damping', expression: 'b_c = 2√(mk)', description: 'Critical damping coefficient' },
                        { name: 'Driven Oscillator', expression: 'x(t) = A cos(ωt-δ), A = F₀/m/√((ω₀²-ω²)²+(bω/m)²)', description: 'Forced/driven oscillation amplitude' },
                        { name: 'Resonance', expression: 'ω_res = √(ω₀² - b²/(2m²))', description: 'Resonance frequency' },
                        { name: 'Quality Factor', expression: 'Q = ω₀/Δω = √(km)/b', description: 'Quality factor of oscillator' },
                        { name: 'Wave Speed on String', expression: 'v = √(T/μ)', description: 'Transverse wave speed on string' },
                        { name: 'Standing Wave String', expression: 'f_n = nv/(2L), n=1,2,3,...', description: 'String standing wave frequencies' },
                        { name: 'Wave Equation', expression: '∂²y/∂x² = (1/v²)∂²y/∂t²', description: '1D wave equation' },
                        { name: 'Wave Power', expression: 'P = ½μω²A²v', description: 'Power transmitted by wave on string' },
                        { name: 'Doppler Effect (Sound)', expression: 'f\' = f(v±v_o)/(v∓v_s)', description: 'Doppler shift for sound' },
                        { name: 'Beat Frequency', expression: 'f_beat = |f₁-f₂|', description: 'Beat frequency from two sources' },
                    ]
                }
            }
        },
        'thermodynamics': {
            name: 'Thermodynamics & Statistical Mechanics',
            description: 'Heat, temperature, entropy, and statistical physics',
            subcategories: {
                'thermo': {
                    name: 'Thermodynamics',
                    formulas: [
                        { name: 'Ideal Gas Law', expression: 'PV = nRT = NkT', description: 'Ideal gas equation of state' },
                        { name: 'Boyle Law', expression: 'P₁V₁ = P₂V₂ (constant T)', description: 'Boyle-Mariotte law' },
                        { name: 'Charles Law', expression: 'V₁/T₁ = V₂/T₂ (constant P)', description: 'Charles law' },
                        { name: 'Gay-Lussac Law', expression: 'P₁/T₁ = P₂/T₂ (constant V)', description: 'Gay-Lussac law' },
                        { name: 'Avogadro Law', expression: 'V ∝ n (constant P,T)', description: 'Avogadro principle' },
                        { name: 'Van der Waals Eq', expression: '(P + an²/V²)(V-nb) = nRT', description: 'Real gas van der Waals equation' },
                        { name: 'First Law', expression: 'ΔU = Q - W', description: 'First law of thermodynamics' },
                        { name: 'Internal Energy Mono', expression: 'U = (3/2)nRT', description: 'Internal energy of monatomic ideal gas' },
                        { name: 'Internal Energy Diatomic', expression: 'U = (5/2)nRT', description: 'Internal energy of diatomic ideal gas' },
                        { name: 'Molar Heat Capacity Cv', expression: 'C_v = (3/2)R (monatomic)', description: 'Molar heat capacity at constant volume' },
                        { name: 'Molar Heat Capacity Cp', expression: 'C_p = C_v + R = (5/2)R (monatomic)', description: 'Molar heat capacity at constant pressure' },
                        { name: 'Adiabatic Process', expression: 'PV^γ = constant, γ = C_p/C_v', description: 'Adiabatic relation' },
                        { name: 'Adiabatic γ Value', expression: 'γ = 5/3 (monatomic), 7/5 (diatomic)', description: 'Adiabatic index values' },
                        { name: 'Adiabatic Relation TV', expression: 'TV^{γ-1} = constant', description: 'Adiabatic T-V relation' },
                        { name: 'Isothermal Work', expression: 'W = nRT ln(V₂/V₁)', description: 'Work in isothermal process' },
                        { name: 'Adiabatic Work', expression: 'W = (P₂V₂-P₁V₁)/(1-γ)', description: 'Work in adiabatic process' },
                        { name: 'Carnot Efficiency', expression: 'η = 1 - T_C/T_H', description: 'Carnot cycle efficiency' },
                        { name: 'Carnot COP Refrigerator', expression: 'COP = T_C/(T_H-T_C)', description: 'Carnot refrigeration coefficient' },
                        { name: 'Carnot COP Heat Pump', expression: 'COP = T_H/(T_H-T_C)', description: 'Carnot heat pump coefficient' },
                        { name: 'Entropy Definition', expression: 'ΔS = ∫ dQ_rev/T', description: 'Entropy change definition' },
                        { name: 'Entropy Ideal Gas', expression: 'ΔS = nC_v ln(T₂/T₁) + nR ln(V₂/V₁)', description: 'Entropy change for ideal gas' },
                        { name: 'Second Law', expression: 'ΔS_universe ≥ 0', description: 'Second law of thermodynamics' },
                        { name: 'Third Law', expression: 'S → 0 as T → 0 K', description: 'Third law of thermodynamics' },
                        { name: 'Clausius-Clapeyron', expression: 'dP/dT = L/(TΔV)', description: 'Phase transition equation' },
                        { name: 'Maxwell Relations', expression: '(∂T/∂V)_S = -(∂P/∂S)_V; (∂T/∂P)_S = (∂V/∂S)_P; -(∂P/∂T)_V = (∂S/∂V)_T; (∂V/∂T)_P = -(∂S/∂P)_T', description: 'Maxwell thermodynamic relations' },
                        { name: 'Gibbs Free Energy', expression: 'G = H - TS', description: 'Gibbs free energy' },
                        { name: 'Helmholtz Free Energy', expression: 'F = U - TS', description: 'Helmholtz free energy' },
                        { name: 'Enthalpy', expression: 'H = U + PV', description: 'Enthalpy definition' },
                        { name: 'Chemical Potential', expression: 'μ = (∂G/∂N)_{T,P}', description: 'Chemical potential definition' },
                        { name: 'Stefan-Boltzmann Law', expression: 'P = σAT⁴', description: 'Blackbody radiation power' },
                        { name: 'Stefan-Boltzmann Constant', expression: 'σ = 5.670367×10⁻⁸ W/(m²·K⁴)', description: 'Stefan-Boltzmann constant' },
                        { name: 'Wiener Displacement', expression: 'λ_maxT = 2.898×10⁻³ m·K', description: 'Wien displacement law' },
                        { name: 'Planck Radiation Law', expression: 'u(λ,T) = 8πhc/(λ⁵)·1/(e^{hc/(λkT)}-1)', description: 'Planck blackbody spectrum' },
                    ]
                },
                'statistical': {
                    name: 'Statistical Mechanics',
                    formulas: [
                        { name: 'Boltzmann Distribution', expression: 'P_i = e^{-E_i/(kT)}/Z', description: 'Boltzmann probability factor' },
                        { name: 'Partition Function', expression: 'Z = Σ_i e^{-E_i/(kT)}', description: 'Canonical partition function' },
                        { name: 'Average Energy', expression: '⟨E⟩ = -∂ ln Z/∂β, β = 1/(kT)', description: 'Average energy from partition function' },
                        { name: 'Entropy Boltzmann', expression: 'S = k ln Ω', description: 'Boltzmann entropy formula' },
                        { name: 'Helmholtz from Partition', expression: 'F = -kT ln Z', description: 'Free energy from partition function' },
                        { name: 'Maxwell-Boltzmann Dist', expression: 'f(v) = 4π(m/(2πkT))^{3/2} v² e^{-mv²/(2kT)}', description: 'Maxwell speed distribution' },
                        { name: 'Average Speed (MB)', expression: '⟨v⟩ = √(8kT/(πm))', description: 'Mean speed in Maxwell-Boltzmann' },
                        { name: 'RMS Speed', expression: 'v_rms = √(3kT/m)', description: 'Root-mean-square speed' },
                        { name: 'Most Probable Speed', expression: 'v_p = √(2kT/m)', description: 'Most probable speed' },
                        { name: 'Equipartition Theorem', expression: '⟨E⟩ = ½kT per quadratic degree of freedom', description: 'Energy equipartition' },
                        { name: 'Fermi-Dirac Distribution', expression: 'f(E) = 1/(e^{(E-μ)/(kT)}+1)', description: 'Fermi-Dirac statistics for fermions' },
                        { name: 'Bose-Einstein Distribution', expression: 'f(E) = 1/(e^{(E-μ)/(kT)}-1)', description: 'Bose-Einstein statistics for bosons' },
                        { name: 'Fermi Energy', expression: 'E_F = ℏ²/(2m)(3π²n)^{2/3}', description: 'Fermi energy of free electron gas' },
                        { name: 'Debye T³ Law', expression: 'C_V = 12π⁴NkT³/(5Θ_D³)', description: 'Low-temperature heat capacity' },
                        { name: 'Einstein Model', expression: 'C_V = 3Nk(Θ_E/T)² e^{Θ_E/T}/(e^{Θ_E/T}-1)²', description: 'Einstein solid heat capacity' },
                        { name: 'Virial Theorem', expression: '⟨K⟩ = -½⟨Σ F_i·r_i⟩', description: 'Virial theorem in statistical mechanics' },
                        { name: 'Fluctuation-Dissipation', expression: '⟨(ΔE)²⟩ = kT²C_V', description: 'Energy fluctuation-susceptibility relation' },
                        { name: 'Boltzmann Relation', expression: 'S = k ln W', description: 'Boltzmann entropy-microstates relation' },
                        { name: 'Gibbs Entropy', expression: 'S = -k Σ p_i ln p_i', description: 'Gibbs entropy formula' },
                        { name: 'Perpetual Motion (Impossible)', expression: 'η = 1 ♯ (2nd law prohibits)', description: 'Perpetual motion impossibility' },
                    ]
                }
            }
        },
        'electromagnetism': {
            name: 'Electromagnetism',
            description: 'Electricity, magnetism, and electromagnetic waves',
            subcategories: {
                'electrostatics': {
                    name: 'Electrostatics',
                    formulas: [
                        { name: 'Coulomb Law', expression: 'F = kₑq₁q₂/r² = q₁q₂/(4πε₀r²)', description: 'Electrostatic force' },
                        { name: 'Coulomb Constant', expression: 'kₑ = 1/(4πε₀) = 8.98755×10⁹ N·m²/C²', description: 'Coulomb constant value' },
                        { name: 'Electric Field (Point)', expression: 'E = kₑq/r²·r̂', description: 'Electric field from point charge' },
                        { name: 'Electric Field (Multiple)', expression: 'E = Σ kₑq_i/r_i²·r̂_i', description: 'Superposition principle for E-field' },
                        { name: 'Electric Dipole Field', expression: 'E = (1/(4πε₀))(2p/r³·cos θ·r̂ + p/r³·sin θ·θ̂)', description: 'Electric dipole field' },
                        { name: 'Gauss Law (Electric)', expression: '∮ E·dA = Q_enc/ε₀', description: 'Gauss law for electricity' },
                        { name: 'Electric Flux', expression: 'Φ_E = ∫ E·dA', description: 'Electric flux definition' },
                        { name: 'Infinite Line Charge', expression: 'E = λ/(2πε₀r)', description: 'E-field from infinite line' },
                        { name: 'Infinite Plane Charge', expression: 'E = σ/(2ε₀)', description: 'E-field from infinite plane' },
                        { name: 'Conducting Plane', expression: 'E = σ/ε₀ (outside conductor)', description: 'E-field near conducting surface' },
                        { name: 'Spherical Shell (inside)', expression: 'E = 0 (inside conducting shell)', description: 'E-field inside hollow conductor' },
                        { name: 'Spherical Shell (outside)', expression: 'E = Q/(4πε₀r²) (outside shell)', description: 'E-field outside charged shell' },
                        { name: 'Electric Potential (Point)', expression: 'V = kₑq/r', description: 'Potential from point charge' },
                        { name: 'Potential Difference', expression: 'ΔV = -∫ E·dl', description: 'Voltage from electric field' },
                        { name: 'Potential Energy', expression: 'U = qV = kₑq₁q₂/r', description: 'Electrostatic potential energy' },
                        { name: 'Electron Volt', expression: '1 eV = 1.602176634×10⁻¹⁹ J', description: 'Electron volt energy unit' },
                        { name: 'Capacitance', expression: 'C = Q/V', description: 'Capacitance definition' },
                        { name: 'Parallel Plate Capacitor', expression: 'C = ε₀A/d', description: 'Capacitance of parallel plates' },
                        { name: 'Spherical Capacitor', expression: 'C = 4πε₀/(1/R₁ - 1/R₂)', description: 'Capacitance of spherical shell' },
                        { name: 'Cylindrical Capacitor', expression: 'C = 2πε₀L/ln(b/a)', description: 'Capacitance of coaxial cylinders' },
                        { name: 'Capacitors Series', expression: '1/C_eq = 1/C₁ + 1/C₂ + ...', description: 'Equivalent capacitance in series' },
                        { name: 'Capacitors Parallel', expression: 'C_eq = C₁ + C₂ + ...', description: 'Equivalent capacitance in parallel' },
                        { name: 'Capacitor Energy', expression: 'U = ½QV = ½CV² = Q²/(2C)', description: 'Energy stored in capacitor' },
                        { name: 'Energy Density (E)', expression: 'u = ½ε₀E²', description: 'Electric field energy density' },
                        { name: 'Dielectric Constant', expression: 'C = κC₀, κ = ε/ε₀', description: 'Dielectric capacitor enhancement' },
                        { name: 'Dielectric Gauss Law', expression: '∮ D·dA = Q_free, D = ε₀E + P', description: 'Gauss law with dielectrics' },
                        { name: 'Milleikan Oil Drop', expression: 'q = ne, e = 1.602×10⁻¹⁹ C', description: 'Quantized charge measurement' },
                    ]
                },
                'current': {
                    name: 'Current & Circuits',
                    formulas: [
                        { name: 'Current Definition', expression: 'I = dQ/dt', description: 'Electric current definition' },
                        { name: 'Current Density', expression: 'J = σE = nqv_d', description: 'Current density and conductivity' },
                        { name: 'Ohm Law', expression: 'V = IR', description: 'Ohm law for resistors' },
                        { name: 'Resistance', expression: 'R = ρL/A', description: 'Resistance from resistivity' },
                        { name: 'Conductivity', expression: 'σ = 1/ρ = ne²τ/m', description: 'Electrical conductivity (Drude)' },
                        { name: 'Power in Resistor', expression: 'P = I²R = V²/R = IV', description: 'Joule heating power' },
                        { name: 'Resistors Series', expression: 'R_eq = R₁ + R₂ + ...', description: 'Series resistance' },
                        { name: 'Resistors Parallel', expression: '1/R_eq = 1/R₁ + 1/R₂ + ...', description: 'Parallel resistance' },
                        { name: 'Kirchhoff Current Law', expression: 'Σ I_in = Σ I_out (at node)', description: 'KCL current conservation' },
                        { name: 'Kirchhoff Voltage Law', expression: 'Σ V = 0 (around closed loop)', description: 'KVL voltage conservation' },
                        { name: 'RC Charging', expression: 'q(t) = CV(1-e^{-t/RC})', description: 'Capacitor charging equation' },
                        { name: 'RC Discharging', expression: 'q(t) = Q₀e^{-t/RC}', description: 'Capacitor discharging equation' },
                        { name: 'RC Time Constant', expression: 'τ = RC', description: 'RC time constant' },
                        { name: 'Current in RC', expression: 'I(t) = (V/R)e^{-t/RC}', description: 'Current during RC charging' },
                        { name: 'Ammeter Connection', expression: 'Ammeter in series (low R)', description: 'Ammeter connection rule' },
                        { name: 'Voltmeter Connection', expression: 'Voltmeter in parallel (high R)', description: 'Voltmeter connection rule' },
                        { name: 'Wheatstone Bridge', expression: 'R₁/R₂ = R₃/R₄ ⇒ I_G = 0', description: 'Wheatstone bridge balance' },
                        { name: 'Drift Velocity', expression: 'v_d = I/(nAq)', description: 'Charge carrier drift velocity' },
                        { name: 'Mean Free Time', expression: 'τ = σm/(ne²)', description: 'Electron mean free time' },
                        { name: 'Thermal EMF', expression: 'V = S·ΔT', description: 'Seebeck effect thermoelectric voltage' },
                    ]
                },
                'magnetism': {
                    name: 'Magnetism',
                    formulas: [
                        { name: 'Lorentz Force', expression: 'F = q(E + v×B)', description: 'Lorentz force on charge' },
                        { name: 'Magnetic Force on Wire', expression: 'F = IL×B', description: 'Magnetic force on current-carrying wire' },
                        { name: 'Magnetic Torque', expression: 'τ = μ×B = IAB sin θ', description: 'Torque on current loop' },
                        { name: 'Magnetic Dipole Moment', expression: 'μ = IA·n̂', description: 'Magnetic dipole moment' },
                        { name: 'Biot-Savart Law', expression: 'dB = (μ₀/4π)·(I dl×r̂)/r²', description: 'Biot-Savart magnetic field' },
                        { name: 'Straight Wire B-field', expression: 'B = μ₀I/(2πr)', description: 'Magnetic field around straight wire' },
                        { name: 'Loop Center B-field', expression: 'B = μ₀I/(2R)', description: 'Magnetic field at center of current loop' },
                        { name: 'Solenoid B-field', expression: 'B = μ₀nI', description: 'Magnetic field inside ideal solenoid' },
                        { name: 'Torus B-field', expression: 'B = μ₀NI/(2πr)', description: 'Magnetic field inside toroid' },
                        { name: 'Ampere Law', expression: '∮ B·dl = μ₀I_enc', description: 'Ampere circuit law' },
                        { name: 'Ampere-Maxwell Law', expression: '∮ B·dl = μ₀I_enc + μ₀ε₀ dΦ_E/dt', description: 'Ampere-Maxwell with displacement current' },
                        { name: 'Gauss Law (Magnetic)', expression: '∮ B·dA = 0', description: 'No magnetic monopoles' },
                        { name: 'Force Between Wires', expression: 'F/L = μ₀I₁I₂/(2πr)', description: 'Force between parallel currents' },
                        { name: 'Hall Effect', expression: 'V_H = IB/(nqt)', description: 'Hall voltage across conductor' },
                        { name: 'Magnetic Energy Inductor', expression: 'U = ½LI²', description: 'Energy stored in inductor' },
                        { name: 'Magnetic Energy Density', expression: 'u = B²/(2μ₀)', description: 'Magnetic field energy density' },
                        { name: 'Lorentz Force (Relativistic)', expression: 'F = q(E + v×B), dp/dt = F', description: 'Relativistic Lorentz force with momentum' },
                    ]
                },
                'induction': {
                    name: 'Electromagnetic Induction & AC',
                    formulas: [
                        { name: 'Faraday Law', expression: 'ε = -dΦ_B/dt', description: 'Faraday law of induction' },
                        { name: 'Lenz Law', expression: 'Induced current opposes the change in flux', description: 'Lenz law direction rule' },
                        { name: 'Magnetic Flux', expression: 'Φ_B = ∫ B·dA = BA cos θ', description: 'Magnetic flux definition' },
                        { name: 'Motional EMF', expression: 'ε = BLv', description: 'Induced EMF from moving conductor' },
                        { name: 'Self-Inductance', expression: 'L = NΦ_B/I', description: 'Self-inductance definition' },
                        { name: 'Solenoid Inductance', expression: 'L = μ₀N²A/l', description: 'Inductance of solenoid' },
                        { name: 'RL Circuit Growth', expression: 'I(t) = (V/R)(1-e^{-t/τ}), τ = L/R', description: 'Current growth in RL circuit' },
                        { name: 'RL Circuit Decay', expression: 'I(t) = I₀e^{-t/τ}', description: 'Current decay in RL circuit' },
                        { name: 'Mutual Inductance', expression: 'M = N₂Φ₂₁/I₁ = N₁Φ₁₂/I₂', description: 'Mutual inductance definition' },
                        { name: 'Transformer Equation', expression: 'V₂/V₁ = N₂/N₁', description: 'Ideal transformer voltage ratio' },
                        { name: 'Transformers Power', expression: 'V₁I₁ = V₂I₂ (ideal)', description: 'Ideal transformer power conservation' },
                        { name: 'LC Resonant Freq', expression: 'f = 1/(2π√(LC))', description: 'LC circuit resonant frequency' },
                        { name: 'AC Voltage', expression: 'V(t) = V₀ sin(ωt)', description: 'Alternating current voltage' },
                        { name: 'AC Current', expression: 'I(t) = I₀ sin(ωt-φ)', description: 'Alternating current waveform' },
                        { name: 'Capacitive Reactance', expression: 'X_C = 1/(ωC)', description: 'Capacitive reactance' },
                        { name: 'Inductive Reactance', expression: 'X_L = ωL', description: 'Inductive reactance' },
                        { name: 'Impedance', expression: 'Z = √(R² + (X_L-X_C)²)', description: 'AC circuit impedance' },
                        { name: 'Phase Angle', expression: 'φ = arctan((X_L-X_C)/R)', description: 'Phase difference in AC circuit' },
                        { name: 'RMS Voltage', expression: 'V_rms = V₀/√2', description: 'Root-mean-square voltage' },
                        { name: 'RMS Current', expression: 'I_rms = I₀/√2', description: 'Root-mean-square current' },
                        { name: 'Average AC Power', expression: 'P_avg = V_rmsI_rms cos φ', description: 'Average AC circuit power' },
                        { name: 'Power Factor', expression: 'PF = cos φ = R/Z', description: 'AC power factor' },
                        { name: 'Q Factor (AC)', expression: 'Q = ω₀L/R = 1/(ω₀RC)', description: 'RLC circuit quality factor' },
                        { name: 'Resonance Bandwidth', expression: 'Δω = ω₀/Q', description: 'Resonance bandwidth' },
                        { name: 'Eddy Currents', expression: 'I_eddy ∝ dB/dt (induced loops)', description: 'Eddy current generation' },
                    ]
                },
                'em_waves': {
                    name: 'Electromagnetic Waves',
                    formulas: [
                        { name: 'Maxwell (Differential)', expression: '∇·E=ρ/ε₀, ∇·B=0, ∇×E=-∂B/∂t, ∇×B=μ₀J+μ₀ε₀∂E/∂t', description: 'Maxwell equations (differential form)' },
                        { name: 'Maxwell (Integral)', expression: '∮E·dA=Q/ε₀, ∮B·dA=0, ∮E·dl=-dΦ_B/dt, ∮B·dl=μ₀I+μ₀ε₀dΦ_E/dt', description: 'Maxwell equations (integral form)' },
                        { name: 'EM Wave Speed', expression: 'c = 1/√(μ₀ε₀) = 2.99792458×10⁸ m/s', description: 'Speed of light in vacuum' },
                        { name: 'EM Wave Equation', expression: '∇²E = (1/c²)∂²E/∂t², ∇²B = (1/c²)∂²B/∂t²', description: 'Wave equations for EM fields' },
                        { name: 'Plane Wave E-field', expression: 'E(x,t) = E₀ cos(kx-ωt)', description: 'Plane electromagnetic wave E-field' },
                        { name: 'Plane Wave B-field', expression: 'B(x,t) = B₀ cos(kx-ωt)', description: 'Plane electromagnetic wave B-field' },
                        { name: 'E/B Ratio', expression: 'E/B = c in vacuum', description: 'Ratio of E to B magnitudes in EM wave' },
                        { name: 'Poynting Vector', expression: 'S = (1/μ₀) E×B', description: 'EM energy flux density' },
                        { name: 'Poynting Magnitude', expression: '|S| = (E₀B₀)/(μ₀) = E₀²/(μ₀c)', description: 'Poynting vector magnitude' },
                        { name: 'Radiation Pressure', expression: 'P_rad = S/c (absorption), 2S/c (reflection)', description: 'Radiation pressure' },
                        { name: 'EM Energy Density', expression: 'u = ½(ε₀E² + B²/μ₀)', description: 'Electromagnetic energy density' },
                        { name: 'Intensity', expression: 'I = ⟨S⟩ = ½ε₀cE₀²', description: 'Average EM wave intensity' },
                        { name: 'Wave Number', expression: 'k = 2π/λ', description: 'Angular wave number' },
                        { name: 'EM Spectrum Relation', expression: 'c = fλ', description: 'Frequency-wavelength relation' },
                        { name: 'Dipole Antenna Power', expression: 'P = μ₀p₀²ω⁴/(12πc)', description: 'Power radiated by electric dipole' },
                        { name: 'Larmor Formula', expression: 'P = q²a²/(6πε₀c³)', description: 'Power radiated by accelerating charge' },
                        { name: 'Relativistic Larmor', expression: 'P = μ₀q²γ⁶(a²-(v×a/c)²)/(6πc)', description: 'Larmor formula for relativistic motion' },
                        { name: 'Skin Depth', expression: 'δ = √(2/(μσω))', description: 'EM wave skin depth in conductor' },
                        { name: 'Brewster Angle', expression: 'tan θ_B = n₂/n₁', description: 'Polarization angle for reflection' },
                        { name: 'Snell Law', expression: 'n₁ sin θ₁ = n₂ sin θ₂', description: 'Law of refraction' },
                        { name: 'Critical Angle', expression: 'θ_c = arcsin(n₂/n₁) for n₁>n₂', description: 'Total internal reflection critical angle' },
                        { name: 'Fresnel Equations (TE)', expression: 'r_⟂ = (n₁cosθ₁-n₂cosθ₂)/(n₁cosθ₁+n₂cosθ₂)', description: 'TE reflection coefficient' },
                        { name: 'Fresnel Equations (TM)', expression: 'r_∥ = (n₂cosθ₁-n₁cosθ₂)/(n₂cosθ₁+n₁cosθ₂)', description: 'TM reflection coefficient' },
                        { name: 'Malus Law', expression: 'I = I₀ cos²θ', description: 'Light intensity through polarizer' },
                    ]
                }
            }
        },
        'optics': {
            name: 'Optics',
            description: 'Light, lenses, mirrors, and optical phenomena',
            subcategories: {
                'geometric': {
                    name: 'Geometric Optics',
                    formulas: [
                        { name: 'Lens Maker Eq', expression: '1/f = (n-1)(1/R₁-1/R₂)', description: 'Thin lens focal length' },
                        { name: 'Thin Lens Equation', expression: '1/f = 1/d_o + 1/d_i', description: 'Gaussian thin lens equation' },
                        { name: 'Lateral Magnification', expression: 'm = -d_i/d_o = h_i/h_o', description: 'Thin lens magnification' },
                        { name: 'Mirror Equation', expression: '1/f = 1/d_o + 1/d_i, f = R/2', description: 'Spherical mirror equation' },
                        { name: 'Mirror Magnification', expression: 'm = -d_i/d_o', description: 'Mirror lateral magnification' },
                        { name: 'Power of Lens', expression: 'P = 1/f (in diopters, f in meters)', description: 'Lens optical power' },
                        { name: 'Two-Lens System', expression: '1/f_sys = 1/f₁ + 1/f₂ - d/(f₁f₂)', description: 'Combined focal length of two lenses' },
                        { name: 'Angular Magnification', expression: 'M = θ\'/θ', description: 'Angular magnification' },
                        { name: 'Simple Magnifier', expression: 'M = 25cm/f (normal near point)', description: 'Angular magnification of magnifying glass' },
                        { name: 'Compound Microscope', expression: 'M = -(L/f_o)(25cm/f_e)', description: 'Compound microscope magnification' },
                        { name: 'Telescope Magnification', expression: 'M = -f_o/f_e', description: 'Refracting telescope magnification' },
                        { name: 'Spherical Refracting Surface', expression: 'n₁/d_o + n₂/d_i = (n₂-n₁)/R', description: 'Image formation by curved surface' },
                        { name: 'Prism Deviation', expression: 'δ = i₁ + i₂ - A', description: 'Light deviation through prism' },
                        { name: 'Minimum Deviation', expression: 'n = sin((A+δ_m)/2)/sin(A/2)', description: 'Refractive index via minimum deviation' },
                        { name: 'Chromatic Aberration', expression: 'Δf = f/(1/f·dn/(n-1))', description: 'Longitudinal chromatic aberration' },
                        { name: 'Lens Aperture f-number', expression: 'N = f/D', description: 'F-number of lens system' },
                    ]
                },
                'wave_optics': {
                    name: 'Wave Optics',
                    formulas: [
                        { name: 'Double Slit Maxima', expression: 'd sin θ = mλ, m=0,±1,±2,...', description: 'Double-slit constructive interference' },
                        { name: 'Double Slit Minima', expression: 'd sin θ = (m+½)λ', description: 'Double-slit destructive interference' },
                        { name: 'Single Slit Minima', expression: 'a sin θ = mλ, m=±1,±2,...', description: 'Single-slit diffraction minima' },
                        { name: 'Single Slit Intensity', expression: 'I(θ) = I₀ (sin β/β)², β=πa sin θ/λ', description: 'Single-slit diffraction pattern' },
                        { name: 'Diffraction Grating', expression: 'd sin θ = mλ', description: 'Grating maxima condition' },
                        { name: 'Grating Dispersion', expression: 'D = dθ/dλ = m/(d cos θ)', description: 'Angular dispersion of grating' },
                        { name: 'Grating Resolving Power', expression: 'R = λ/Δλ = Nm', description: 'Grating spectral resolution' },
                        { name: 'Thin Film (Reflection)', expression: '2nt = (m+½)λ (constructive, n_film>n_surroundings)', description: 'Thin film interference' },
                        { name: 'Thin Film (Transmission)', expression: '2nt = mλ (constructive transmission)', description: 'Thin film transmitted light' },
                        { name: 'Michelson Interferometer', expression: 'Δd = m·λ/2', description: 'Michelson fringe shift' },
                        { name: 'Fabry-Perot', expression: 'Δλ = λ²/(2nL√(1-R)) (finesse)', description: 'Fabry-Perot etalon resolution' },
                        { name: 'Rayleigh Criterion', expression: 'θ_min = 1.22λ/D', description: 'Angular resolution of aperture' },
                        { name: 'Bragg Diffraction', expression: '2d sin θ = nλ', description: 'X-ray diffraction from crystals' },
                        { name: 'Coherence Length', expression: 'L_c = λ²/Δλ', description: 'Temporal coherence length' },
                        { name: 'Holography', expression: 'I = |O+R|² = |O|²+|R|²+O*R+OR*', description: 'Hologram recording intensity' },
                        { name: 'Babinet Principle', expression: 'Diffraction from complementary apertures is identical except for direct beam', description: 'Babinet principle' },
                        { name: 'Fraunhofer Diffraction', expression: 'U(θ) = ∫ A(x)e^{-ikx sinθ} dx', description: 'Fraunhofer diffraction integral' },
                    ]
                }
            }
        },
        'quantum': {
            name: 'Quantum Mechanics',
            description: 'Quantum theory, wave mechanics, and atomic physics',
            subcategories: {
                'foundations': {
                    name: 'Quantum Foundations',
                    formulas: [
                        { name: 'Planck Relation', expression: 'E = hf = ℏω', description: 'Energy-frequency relation' },
                        { name: 'de Broglie Wavelength', expression: 'λ = h/p = h/(mv)', description: 'Matter wave wavelength' },
                        { name: 'Heisenberg Position-Momentum', expression: 'Δx Δp ≥ ℏ/2', description: 'Heisenberg uncertainty principle' },
                        { name: 'Heisenberg Energy-Time', expression: 'ΔE Δt ≥ ℏ/2', description: 'Energy-time uncertainty relation' },
                        { name: 'Commutator', expression: '[A,B] = AB - BA', description: 'Operator commutator definition' },
                        { name: 'Canonical Commutation', expression: '[x,p] = iℏ', description: 'Canonical commutation relation' },
                        { name: 'Schrödinger Equation (TD)', expression: 'iℏ ∂Ψ/∂t = ĤΨ', description: 'Time-dependent Schrödinger equation' },
                        { name: 'Schrödinger Equation (TI)', expression: 'Ĥψ = Eψ', description: 'Time-independent Schrödinger equation' },
                        { name: 'Probability Density', expression: 'P(x,t) = |Ψ(x,t)|²', description: 'Born rule probability density' },
                        { name: 'Normalization', expression: '∫ |Ψ|² dV = 1', description: 'Wave function normalization' },
                        { name: 'Expectation Value', expression: '⟨A⟩ = ∫ Ψ* Â Ψ dV', description: 'Quantum expectation value' },
                        { name: 'Infinite Square Well', expression: 'E_n = n²π²ℏ²/(2mL²), ψ_n = √(2/L) sin(nπx/L)', description: 'Particle in a box energies and states' },
                        { name: 'Simple Harmonic Oscillator', expression: 'E_n = ℏω(n+½), n=0,1,2,...', description: 'Quantum oscillator energy levels' },
                        { name: 'Harmonic Oscillator WF', expression: 'ψ_n(x) = (1/√(2ⁿn!))(mω/(πℏ))^{1/4} H_n(ξ)e^{-ξ²/2}', description: 'Quantum HO wave functions with Hermite polynomials' },
                        { name: 'Zero Point Energy', expression: 'E₀ = ½ℏω', description: 'Quantum harmonic zero-point energy' },
                        { name: 'Finite Potential Well', expression: 'tan(αa) = β/α or -α/β for bound states', description: 'Transcendental equation for finite well' },
                        { name: 'Potential Barrier (Tunneling)', expression: 'T = 1/(1+V₀²/(4E(V₀-E))·sinh²(αa)) for E<V₀', description: 'Quantum tunneling transmission' },
                        { name: 'WKB Approximation', expression: 'ψ(x) ≈ C/√(p(x))·exp(±(i/ℏ)∫ p(x)dx)', description: 'WKB semiclassical wave function' },
                        { name: 'Ehrenfest Theorem', expression: 'd⟨x⟩/dt = ⟨p⟩/m, d⟨p⟩/dt = -⟨V\'(x)⟩', description: 'Ehrenfest theorem (classical correspondence)' },
                    ]
                },
                'angular_momentum': {
                    name: 'Angular Momentum & Spin',
                    formulas: [
                        { name: 'Angular Momentum Quant', expression: 'L²|l,m⟩ = ℏ²l(l+1)|l,m⟩', description: 'Angular momentum quantization' },
                        { name: 'Lz Eigenvalues', expression: 'L_z|l,m⟩ = mℏ|l,m⟩, m=-l,...,l', description: 'Z-component quantization' },
                        { name: 'Angular Momentum Comm', expression: '[L_x,L_y] = iℏL_z (and cyclic)', description: 'Angular momentum commutation' },
                        { name: 'Raising Operator', expression: 'L_±|l,m⟩ = ℏ√(l(l+1)-m(m±1))|l,m±1⟩', description: 'Angular momentum ladder operators' },
                        { name: 'Spin-½', expression: 'S = (ℏ/2)σ, Pauli matrices σ', description: 'Spin-½ operators' },
                        { name: 'Pauli Matrices', expression: 'σ_x = [[0,1],[1,0]], σ_y = [[0,-i],[i,0]], σ_z = [[1,0],[0,-1]]', description: 'Pauli spin matrices' },
                        { name: 'Stern-Gerlach', expression: 'F_z = μ_z·∂B_z/∂z (force on magnetic moment)', description: 'Stern-Gerlach experiment force' },
                        { name: 'Addition of AM', expression: '|j₁-j₂| ≤ j ≤ j₁+j₂', description: 'Angular momentum addition rule' },
                        { name: 'Clebsch-Gordan Coeff', expression: '|j,m⟩ = Σ C(j₁j₂j; m₁m₂m)|j₁m₁⟩|j₂m₂⟩', description: 'Clebsch-Gordan decomposition' },
                        { name: 'Magnetic Moment', expression: 'μ_L = -e/(2m_e) L, μ_S = -e/m_e S', description: 'Electron magnetic moment' },
                        { name: 'Bohr Magneton', expression: 'μ_B = eℏ/(2m_e) = 9.274×10⁻²⁴ J/T', description: 'Bohr magneton value' },
                        { name: 'Spin-Orbit Coupling', expression: 'H_SO = (1/(2m²c²))(1/r·dV/dr)·L·S', description: 'Spin-orbit interaction Hamiltonian' },
                        { name: 'Fine Structure', expression: 'E_fs = (E_n²/(2m₀c²))(3 - 4n/(j+½))', description: 'Fine structure energy correction' },
                        { name: 'Zeeman Effect (Normal)', expression: 'ΔE = μ_B·B·m_l', description: 'Normal Zeeman splitting' },
                        { name: 'Zeeman Effect (Anomalous)', expression: 'ΔE = μ_B·g_J·B·m_J, g_J = 1+[j(j+1)+s(s+1)-l(l+1)]/[2j(j+1)]', description: 'Anomalous Zeeman with Landé g-factor' },
                        { name: 'Hyperfine Splitting', expression: 'ΔE_HF = A·⟨I·J⟩', description: 'Hyperfine interaction energy' },
                        { name: '21 cm Line', expression: 'ν = 1420.4057517667 MHz (λ=21cm)', description: 'Hydrogen 21 cm hyperfine transition' },
                    ]
                },
                'atomic': {
                    name: 'Atomic & Molecular Physics',
                    formulas: [
                        { name: 'Bohr Model Energy', expression: 'E_n = -13.6 eV/n²', description: 'Hydrogen energy levels' },
                        { name: 'Bohr Radius', expression: 'a₀ = 4πε₀ℏ²/(m_e e²) = 0.529×10⁻¹⁰ m', description: 'Bohr radius of hydrogen' },
                        { name: 'Rydberg Formula', expression: '1/λ = R(1/n_f² - 1/n_i²)', description: 'Hydrogen spectral line wavelengths' },
                        { name: 'Rydberg Constant', expression: 'R_∞ = 10973731.568160 m⁻¹', description: 'Rydberg constant value' },
                        { name: 'Hydrogen Wave Functions', expression: 'ψ_{nlm}(r,θ,φ) = R_{nl}(r)Y_lm(θ,φ)', description: 'Hydrogen atom wave function' },
                        { name: 'Radial Hydrogen', expression: 'R_{nl}(r) = √((2/(na₀))³(n-l-1)!/(2n((n+l)!)))·e^{-ρ/2}ρ^l·L_{n-l-1}^{2l+1}(ρ)', description: 'Hydrogen radial wave function' },
                        { name: 'Lyman Series', expression: 'n_i = 1, n_f = 2,3,... (UV)', description: 'Lyman ultraviolet series' },
                        { name: 'Balmer Series', expression: 'n_i = 2, n_f = 3,4,... (visible)', description: 'Balmer visible series' },
                        { name: 'Paschen Series', expression: 'n_i = 3, n_f = 4,5,... (IR)', description: 'Paschen infrared series' },
                        { name: 'Pauli Exclusion', expression: 'No two electrons can have same set of quantum numbers (n,l,m_l,m_s)', description: 'Pauli exclusion principle' },
                        { name: 'Hund Rules', expression: 'Maximize S, then L, then J for L-S coupling', description: 'Hund rules for atomic term ordering' },
                        { name: 'Selection Rules (Dipole)', expression: 'Δl = ±1, Δm_l = 0,±1, Δs=0, Δm_s=0', description: 'Electric dipole transition rules' },
                        { name: 'Stark Effect', expression: 'ΔE = 3ea₀n·(n-k)·E/2 for hydrogen', description: 'Linear Stark shift for hydrogen' },
                        { name: 'Photoelectric Effect', expression: 'K_max = hf - φ', description: 'Einstein photoelectric equation' },
                        { name: 'Compton Scattering', expression: 'Δλ = h/(m_e c)(1-cos θ)', description: 'Compton shift of photon wavelength' },
                        { name: 'Moseley Law', expression: '√f = a(Z-b)', description: 'X-ray frequency vs atomic number' },
                        { name: 'Franck-Hertz', expression: 'Energy loss quantized: ΔE = eV = hf_{atomic}', description: 'Franck-Hertz experiment quantization' },
                        { name: 'Molecular Rotation', expression: 'E_J = J(J+1)ℏ²/(2I)', description: 'Rigid rotor molecular energy' },
                        { name: 'Molecular Vibration', expression: 'E_v = ℏω(v+½)', description: 'Harmonic oscillator molecular vibration' },
                        { name: 'Born-Oppenheimer', expression: 'ψ_total = ψ_electronic·ψ_nuclear (separated approx)', description: 'Born-Oppenheimer approximation' },
                    ]
                },
                'advanced_qm': {
                    name: 'Advanced Quantum Mechanics',
                    formulas: [
                        { name: 'Density Matrix', expression: 'ρ = Σ p_i|ψ_i⟩⟨ψ_i|', description: 'Mixed state density matrix' },
                        { name: 'Von Neumann Entropy', expression: 'S(ρ) = -tr(ρ ln ρ)', description: 'Quantum entropy' },
                        { name: 'Bell States', expression: '|Φ±⟩ = (|00⟩±|11⟩)/√2, |Ψ±⟩ = (|01⟩±|10⟩)/√2', description: 'Maximally entangled Bell states' },
                        { name: 'CHSH Inequality', expression: '⟨AB⟩+⟨AB\'⟩+⟨A\'B⟩-⟨A\'B\'⟩ ≤ 2', description: 'CHSH Bell inequality' },
                        { name: 'Quantum No-Cloning', expression: 'No unitary U: U|ψ⟩|0⟩ = |ψ⟩|ψ⟩ for all |ψ⟩', description: 'No-cloning theorem' },
                        { name: 'Density of States (3D)', expression: 'g(E) = V/(2π²)(2m/ℏ²)^{3/2}√E', description: 'Free electron density of states' },
                        { name: 'Tight Binding Model', expression: 'E(k) = E₀ - 2t cos(ka)', description: 'Tight binding dispersion relation' },
                        { name: 'Bloch Theorem', expression: 'ψ_k(r) = e^{ik·r}u_k(r), u_k(r) periodic', description: 'Bloch wave in periodic potential' },
                        { name: 'Kronig-Penney Model', expression: 'cos(ka) = cos(αa) + (β/α)sin(αa), β = mU₀b/ℏ²', description: 'Kronig-Penney band structure' },
                        { name: 'Fermi Golden Rule', expression: 'Γ = (2π/ℏ)|⟨f|H\'|i⟩|² ρ(E_f)', description: 'Transition rate in perturbation theory' },
                        { name: 'Time-Dependent Perturbation', expression: 'c_f(t) = -(i/ℏ)∫⟨f|H\'(t\')|i⟩e^{iω_{fi}t\'} dt\'', description: 'First-order time-dependent perturbation' },
                        { name: 'Scattering Amplitude', expression: 'f(θ) = -(2m/ℏ²)∫ e^{-iq·r}V(r)d³r/(4π)', description: 'Born approximation scattering' },
                        { name: 'Rutherford Scattering', expression: 'dσ/dΩ = (kq₁q₂/(4E))²·1/sin⁴(θ/2)', description: 'Rutherford scattering cross section' },
                        { name: 'Møller Scattering', expression: 'dσ/dΩ ∝ (s²+u²)/t² + (s²+t²)/u² + ...', description: 'Electron-electron scattering' },
                        { name: 'Path Integral Formulation', expression: '⟨x_f|e^{-iHt/ℏ}|x_i⟩ = ∫ Dx(t) e^{iS[x]/ℏ}', description: 'Feynman path integral' },
                        { name: 'Hamiltonian in QM', expression: 'Ĥ = -ℏ²/(2m)∇² + V(r)', description: 'General quantum Hamiltonian' },
                        { name: 'Creation/Annihilation', expression: 'a†|n⟩ = √(n+1)|n+1⟩, a|n⟩ = √n|n-1⟩', description: 'Ladder operator action' },
                        { name: 'Number Operator', expression: 'N = a†a, N|n⟩ = n|n⟩', description: 'Number operator for Fock states' },
                        { name: 'Coherent State', expression: '|α⟩ = e^{-|α|²/2} Σ αⁿ/√(n!)|n⟩', description: 'Coherent state definition' },
                        { name: 'Squeezed State', expression: '|ζ⟩ = e^{(ζ*a²-ζa†²)/2} |0⟩', description: 'Squeezed vacuum state' },
                        { name: 'Quantum Phase Estimation', expression: 'QPE(U): |0⟩|ψ⟩ → |φ̃⟩|ψ⟩, U|ψ⟩=e^{2πiφ}|ψ⟩', description: 'Quantum phase estimation algorithm' },
                    ]
                }
            }
        },
        'relativity': {
            name: 'Relativity',
            description: 'Special and general relativity',
            subcategories: {
                'special': {
                    name: 'Special Relativity',
                    formulas: [
                        { name: 'Lorentz Factor', expression: 'γ = 1/√(1-v²/c²)', description: 'Relativistic gamma factor' },
                        { name: 'Time Dilation', expression: 'Δt = γΔt₀', description: 'Moving clock runs slow' },
                        { name: 'Length Contraction', expression: 'L = L₀/γ', description: 'Moving length contracts' },
                        { name: 'Lorentz Transform (x)', expression: 'x\' = γ(x - vt), t\' = γ(t - vx/c²)', description: 'Lorentz coordinate transformation' },
                        { name: 'Lorentz Inverse', expression: 'x = γ(x\' + vt\'), t = γ(t\' + vx\'/c²)', description: 'Inverse Lorentz transformation' },
                        { name: 'Velocity Addition', expression: 'u\' = (u - v)/(1 - uv/c²)', description: 'Relativistic velocity addition' },
                        { name: 'Relativistic Momentum', expression: 'p = γmv', description: 'Relativistic momentum' },
                        { name: 'Relativistic Energy', expression: 'E = γmc²', description: 'Total relativistic energy' },
                        { name: 'Rest Energy', expression: 'E₀ = mc²', description: 'Mass-energy equivalence' },
                        { name: 'Energy-Momentum Relation', expression: 'E² = p²c² + m²c⁴', description: 'Relativistic energy-momentum' },
                        { name: 'Kinetic Energy (Rel)', expression: 'K = (γ-1)mc²', description: 'Relativistic kinetic energy' },
                        { name: 'Relativistic Doppler (Long)', expression: 'f\' = f√((1-β)/(1+β))', description: 'Longitudinal relativistic Doppler' },
                        { name: 'Relativistic Doppler (Trans)', expression: 'f\' = f/γ (transverse)', description: 'Transverse relativistic Doppler' },
                        { name: 'Relativistic Snell', expression: 'n = c/v in medium', description: 'Relativistic refractive index' },
                        { name: 'Muon Decay Example', expression: 'τ\' = γτ₀, muons reach surface due to time dilation', description: 'Muon lifetime dilation example' },
                        { name: 'Minkowski Metric', expression: 'ds² = -c²dt² + dx² + dy² + dz²', description: 'Minkowski spacetime metric' },
                        { name: 'Proper Time', expression: 'dτ = dt/γ = √(-ds²/c²)', description: 'Proper time along worldline' },
                        { name: 'Four-Vector', expression: 'X^μ = (ct, x, y, z)', description: 'Spacetime four-position vector' },
                        { name: 'Four-Velocity', expression: 'U^μ = γ(c, v_x, v_y, v_z)', description: 'Four-velocity definition' },
                        { name: 'Four-Momentum', expression: 'P^μ = (E/c, p_x, p_y, p_z)', description: 'Energy-momentum four-vector' },
                        { name: 'Rapidity', expression: 'η = artanh(v/c)', description: 'Rapidity in special relativity' },
                        { name: 'Twin Paradox Resolution', expression: 'Traveling twin ages less: Δτ = ∫ √(1-v²/c²) dt', description: 'Twin paradox proper time calculation' },
                        { name: 'Relativistic Mass', expression: 'm_rel = γm₀', description: 'Relativistic mass (deprecated concept)' },
                        { name: 'Light Cone', expression: 'ds²=0, paths of light rays', description: 'Light cone structure of spacetime' },
                        { name: 'Causality', expression: 'If event A causes B, then t_B > t_A in all frames', description: 'Relativistic causality constraint' },
                    ]
                },
                'general': {
                    name: 'General Relativity',
                    formulas: [
                        { name: 'Einstein Field Eq (Full)', expression: 'R_μν - ½Rg_μν + Λg_μν = 8πGT_μν/c⁴', description: 'Einstein field equations with cosmological constant' },
                        { name: 'Schwarzschild Metric', expression: 'ds² = -(1-2GM/(rc²))c²dt² + (1-2GM/(rc²))⁻¹dr² + r²dΩ²', description: 'Schwarzschild exterior solution' },
                        { name: 'Schwarzschild Radius', expression: 'r_s = 2GM/c²', description: 'Event horizon radius of black hole' },
                        { name: 'Gravitational Time Dilation', expression: 'Δt = Δt₀/√(1-2GM/(rc²))', description: 'Time dilation in gravitational field' },
                        { name: 'Gravitational Redshift', expression: 'z = (λ_obs-λ_em)/λ_em ≈ GM/(rc²)', description: 'Gravitational frequency shift' },
                        { name: 'Eddington-Finkelstein', expression: 'ds² = -(1-r_s/r)dv² + 2dvdr + r²dΩ²', description: 'Eddington-Finkelstein coordinates' },
                        { name: 'Kruskal-Szekeres', expression: 'T²-X² = (r/r_s-1)e^{r/r_s}, null coordinates', description: 'Kruskal-Szekeres maximal extension' },
                        { name: 'Reissner-Nordström', expression: 'ds² = -(1-2M/r+Q²/r²)dt² + (1-2M/r+Q²/r²)⁻¹dr² + r²dΩ²', description: 'Charged black hole metric' },
                        { name: 'Kerr Metric', expression: 'ds² = -(1-2Mr/ρ²)dt² - (4Mar sin²θ/ρ²)dtdφ + (ρ²/Δ)dr² + ρ²dθ² + (r²+a²+2Mra²sin²θ/ρ²)sin²θdφ²', description: 'Rotating black hole metric' },
                        { name: 'Kerr-Newman', expression: 'Kerr metric with electric charge Q', description: 'Rotating charged black hole' },
                        { name: 'Friedmann Eq (Flat)', expression: '(ȧ/a)² = 8πGρ/3 + Λ/3', description: 'First Friedmann equation for flat universe' },
                        { name: 'Friedmann Eq (Curved)', expression: '(ȧ/a)² = 8πGρ/3 - kc²/a² + Λ/3', description: 'First Friedmann equation with curvature' },
                        { name: 'Second Friedmann Eq', expression: 'ä/a = -4πG(ρ+3P/c²)/3 + Λ/3', description: 'Second Friedmann (acceleration) equation' },
                        { name: 'Hubble Law', expression: 'v = H₀d', description: 'Hubble expansion law' },
                        { name: 'Hubble Parameter', expression: 'H = ȧ/a', description: 'Hubble parameter definition' },
                        { name: 'Critical Density', expression: 'ρ_c = 3H₀²/(8πG)', description: 'Universe critical density' },
                        { name: 'Cosmological Redshift', expression: '1+z = a_now/a_then', description: 'Redshift from cosmic expansion' },
                        { name: 'FLRW Metric', expression: 'ds² = -c²dt² + a(t)²[dr²/(1-kr²) + r²dΩ²]', description: 'Friedmann-Lemaître-Robertson-Walker metric' },
                        { name: 'Deceleration Parameter', expression: 'q = -aä/ȧ²', description: 'Cosmological deceleration parameter' },
                        { name: 'Dark Energy EoS', expression: 'w = P/ρ ≈ -1 for ΛCDM', description: 'Dark energy equation of state' },
                        { name: 'Cosmic Microwave Background', expression: 'T₀ = 2.725 K, T(z) = T₀(1+z)', description: 'CMB temperature today and at redshift' },
                        { name: 'Gravitational Waves Speed', expression: 'c_g = c (from GW170817/GRB170817A)', description: 'Gravitational wave speed ~ c' },
                        { name: 'Gravitational Wave Strain', expression: 'h = 2G(Ïₓₓ-Ï_yy)/(c⁴·D)', description: 'Gravitational wave amplitude' },
                        { name: 'LIGO Detection', expression: 'h ~ 10⁻²¹ at 100 Mpc for binary BH merger', description: 'Typical LIGO strain sensitivity' },
                        { name: 'Binary Pulsar Decay', expression: 'Ṗ_b = -192πG^{5/3}m₁m₂/(5c⁵)(P_b/(2π))^{-5/3}·f(e)', description: 'Orbital decay via gravitational waves' },
                        { name: 'Perihelion Precession', expression: 'Δφ = 6πGM/(a(1-e²)c²) per orbit', description: 'Mercury perihelion advance (GR prediction)' },
                        { name: 'Light Deflection', expression: 'θ = 4GM/(bc²) (max for Sun: 1.75")', description: 'Gravitational light bending by mass' },
                        { name: 'Shapiro Delay', expression: 'Δt = 2GM/c³·ln(4r_e r_p/b²)', description: 'Radar time delay in gravitational field' },
                        { name: 'Black Hole Entropy', expression: 'S_B = A/(4Gℏ)·kc³ (Bekenstein-Hawking)', description: 'Black hole entropy formula' },
                        { name: 'Hawking Temperature', expression: 'T_H = ℏc³/(8πGMk_B)', description: 'Hawking temperature of black hole' },
                        { name: 'Black Hole Lifetime', expression: 'τ_evap = 5120πG²M³/(ℏc⁴)', description: 'Black hole evaporation time via Hawking radiation' },
                        { name: 'Penrose Process', expression: 'E_extracted = (1 - √(1/2))M (max 29%)', description: 'Energy extraction from Kerr black hole' },
                    ]
                }
            }
        },
        'nuclear': {
            name: 'Nuclear & Particle Physics',
            description: 'Nuclear structure, reactions, and fundamental particles',
            subcategories: {
                'nuclear': {
                    name: 'Nuclear Physics',
                    formulas: [
                        { name: 'Nuclear Radius', expression: 'R = R₀·A^{1/3}, R₀ ≈ 1.2 fm', description: 'Nuclear size scaling' },
                        { name: 'Binding Energy', expression: 'B = (Zm_H + Nm_n - m_nucleus)c²', description: 'Nuclear binding energy' },
                        { name: 'Semi-Empirical Mass F.', expression: 'B = a_V A - a_S A^{2/3} - a_C Z(Z-1)/A^{1/3} - a_A(A-2Z)²/A ± δ', description: 'Weizsäcker/Bethe mass formula' },
                        { name: 'Nuclear Force', expression: 'V(r) = V₀·e^{-r/d} (Yukawa potential)', description: 'Yukawa nuclear potential' },
                        { name: 'Radioactive Decay Law', expression: 'N(t) = N₀·e^{-λt}', description: 'Exponential radioactive decay' },
                        { name: 'Half-Life', expression: 't₁/₂ = ln 2/λ = τ·ln 2', description: 'Half-life from decay constant' },
                        { name: 'Activity', expression: 'A = λN = -dN/dt', description: 'Radioactive activity' },
                        { name: 'Mean Lifetime', expression: 'τ = 1/λ', description: 'Mean lifetime of radioactive nuclei' },
                        { name: 'Alpha Decay', expression: '⁴₂He emission, Z→Z-2, A→A-4', description: 'Alpha particle emission' },
                        { name: 'Beta- Decay', expression: 'n → p + e⁻ + ν̄_e, Z→Z+1, A unchanged', description: 'Beta-minus decay (neutron excess)' },
                        { name: 'Beta+ Decay', expression: 'p → n + e⁺ + ν_e, Z→Z-1, A unchanged', description: 'Beta-plus decay (proton excess)' },
                        { name: 'Electron Capture', expression: 'p + e⁻ → n + ν_e, Z→Z-1, A unchanged', description: 'Electron capture process' },
                        { name: 'Gamma Decay', expression: 'A* → A + γ (isomeric transition)', description: 'Gamma ray emission from excited nucleus' },
                        { name: 'Internal Conversion', expression: 'E_excitation → kinetic energy of atomic electron', description: 'Internal conversion process' },
                        { name: 'Geiger-Nuttal Law', expression: 'log₁₀λ = a + b·ln(E_α)', description: 'Alpha decay energy vs half-life' },
                        { name: 'Radioactive Series', expression: '²³⁸U, ²³⁵U, ²³²Th series end at Pb isotopes', description: 'Natural radioactive decay series' },
                        { name: 'Cross Section', expression: 'σ = reaction rate/(incident flux × number of targets)', description: 'Nuclear cross section definition' },
                        { name: 'Neutron Activation', expression: 'A = N_target·σ·Φ(1-e^{-λt})', description: 'Neutron activation analysis' },
                        { name: 'Nuclear Fission', expression: '²³⁵U + n → fission fragments + 2-3n + ~200 MeV', description: 'Uranium-235 fission reaction' },
                        { name: 'Nuclear Fusion', expression: '²H + ³H → ⁴He + n + 17.6 MeV', description: 'Deuterium-tritium fusion' },
                        { name: 'Q-Value', expression: 'Q = (Σm_initial - Σm_final)c²', description: 'Energy released in nuclear reaction' },
                        { name: 'Liquid Drop Model', expression: 'Nucleus modeled as incompressible charged liquid drop', description: 'Liquid drop model of nucleus' },
                        { name: 'Shell Model Magic Numbers', expression: '2, 8, 20, 28, 50, 82, 126 (closed shells)', description: 'Nuclear magic numbers' },
                        { name: 'Coulomb Barrier', expression: 'V_C = Z₁Z₂e²/(4πε₀R)', description: 'Coulomb barrier for charged particle reactions' },
                        { name: 'Gamow Factor', expression: 'P = exp(-2πη), η = Z₁Z₂e²/(4πε₀ℏv)', description: 'Gamow tunneling factor' },
                        { name: 'Becquerel Unit', expression: '1 Bq = 1 decay/s', description: 'SI unit of radioactivity' },
                        { name: 'Curie Unit', expression: '1 Ci = 3.7×10¹⁰ Bq', description: 'Historical radioactivity unit' },
                        { name: 'Radiation Dose (Gray)', expression: '1 Gy = 1 J/kg (absorbed dose)', description: 'Gray unit of radiation dose' },
                        { name: 'Sievert Unit', expression: '1 Sv = 1 Gy × WR (equivalent dose)', description: 'Sievert unit of biological effective dose' },
                    ]
                },
                'particle': {
                    name: 'Particle Physics',
                    formulas: [
                        { name: 'Standard Model', expression: 'SU(3)_C × SU(2)_L × U(1)_Y gauge symmetry', description: 'Standard Model gauge group' },
                        { name: 'Quark Charges', expression: 'Q_u = +2/3, Q_d = -1/3, Q_c=+2/3, Q_s=-1/3, Q_t=+2/3, Q_b=-1/3', description: 'Quark electric charges' },
                        { name: 'Lepton Charges', expression: 'Q_e = Q_μ = Q_τ = -1, Q_ν = 0', description: 'Lepton electric charges' },
                        { name: 'QED Lagrangian', expression: 'L = ψ̄(iγ^μ∂_μ - m)ψ - ¼F_μνF^{μν} - eψ̄γ^μA_μψ', description: 'Quantum electrodynamics Lagrangian' },
                        { name: 'Dirac Equation', expression: '(iγ^μ∂_μ - m)ψ = 0', description: 'Relativistic electron equation' },
                        { name: 'Dirac Gamma Matrices', expression: '{γ^μ,γ^ν} = 2g^{μν}', description: 'Gamma matrices anticommutation' },
                        { name: 'Feynman Propagator', expression: 'D_F(p) = i/(p²-m²+iε)', description: 'Scalar Feynman propagator' },
                        { name: 'Fermion Propagator', expression: 'S_F(p) = i(p̸+m)/(p²-m²+iε)', description: 'Fermion Feynman propagator' },
                        { name: 'QED Vertex', expression: '-ieγ^μ', description: 'QED electron-photon vertex' },
                        { name: 'Running Coupling (QED)', expression: 'α(Q²) = α(μ²)/(1 - (α(μ²)/(3π))ln(Q²/μ²))', description: 'QED running fine structure constant' },
                        { name: 'Running Coupling (QCD)', expression: 'α_s(Q²) = 12π/((33-2n_f)ln(Q²/Λ_QCD²))', description: 'QCD running coupling constant' },
                        { name: 'Confinement', expression: 'Quarks confined in hadrons: V(r) ≈ κr at large r', description: 'QCD quark confinement' },
                        { name: 'Asymptotic Freedom', expression: 'α_s → 0 as Q² → ∞', description: 'QCD asymptotic freedom' },
                        { name: 'Parton Distribution Functions', expression: 'f_i(x,Q²): probability of parton i carrying fraction x of hadron momentum', description: 'PDFs in deep inelastic scattering' },
                        { name: 'Bjorken Scaling', expression: 'F₂(x,Q²) → F₂(x) as Q²→∞ (scaling)', description: 'Bjorken scaling (approximate)' },
                        { name: 'Deep Inelastic Scattering', expression: 'd²σ/dΩdE\' = (α²/(4E²sin⁴(θ/2)))(W₂cos²(θ/2)+2W₁sin²(θ/2))', description: 'DIS cross section formula' },
                        { name: 'CKM Matrix', expression: 'V_CKM = [[V_ud,V_us,V_ub],[V_cd,V_cs,V_cb],[V_td,V_ts,V_tb]]', description: 'Cabibbo-Kobayashi-Maskawa quark mixing' },
                        { name: 'Weinberg Angle', expression: 'sin²θ_W = 0.223, M_W² = M_Z²cos²θ_W', description: 'Weak mixing angle' },
                        { name: 'W Boson Decay', expression: 'Γ(W→lν) = G_FM_W³/(6√2π)', description: 'W boson leptonic decay width' },
                        { name: 'Z Boson Decay', expression: 'Γ(Z→ff̄) = G_FM_Z³/(6√2π)(g_V²+g_A²)', description: 'Z boson decay width to fermions' },
                        { name: 'Fermi Constant', expression: 'G_F = 1.1663787×10⁻⁵ GeV⁻²', description: 'Fermi coupling constant' },
                        { name: 'Higgs Mechanism', expression: 'V(φ) = μ²|φ|² + λ|φ|⁴, ⟨φ⟩ = v/√2 = 246 GeV', description: 'Higgs potential and VEV' },
                        { name: 'Higgs Mass', expression: 'm_H = 125.20 GeV/c²', description: 'Higgs boson mass' },
                        { name: 'Yukawa Coupling', expression: 'L_Y = -y_f ψ̄_L φ ψ_R, m_f = y_f·v/√2', description: 'Yukawa interaction for fermion masses' },
                        { name: 'Pontecorvo-Maki-Nakagawa-Sakata', expression: 'U_PMNS = lepton mixing matrix (solar, atmospheric, reactor)', description: 'Lepton mixing matrix' },
                        { name: 'Neutrino Oscillation', expression: 'P(ν_α→ν_β) = Σ U_αiU*_βiU*_αjU_βj·e^{-iΔm²_{ij}L/(2E)}', description: 'Neutrino oscillation probability' },
                        { name: 'MNS Matrix Parameters', expression: 'θ₁₂≈33°, θ₂₃≈48°, θ₁₃≈8.5°', description: 'PMNS mixing angle values' },
                        { name: 'Δm² Solar', expression: 'Δm²_solar = 7.53×10⁻⁵ eV²', description: 'Solar neutrino mass-squared difference' },
                        { name: 'Δm² Atmospheric', expression: 'Δm²_atm = 2.44×10⁻³ eV²', description: 'Atmospheric neutrino mass-squared difference' },
                        { name: 'Fine Structure Constant', expression: 'α = e²/(4πε₀ℏc) = 1/137.035999084', description: 'Fine structure constant' },
                        { name: 'Proton Mass', expression: 'm_p = 938.27208943 MeV/c²', description: 'Proton mass' },
                        { name: 'Neutron Mass', expression: 'm_n = 939.56542052 MeV/c²', description: 'Neutron mass' },
                        { name: 'Electron Mass', expression: 'm_e = 0.51099895069 MeV/c²', description: 'Electron mass' },
                        { name: 'Gravity Coupling', expression: 'G_N = 6.67430×10⁻¹¹ m³/(kg·s²)', description: 'Newton gravitational constant' },
                        { name: 'Grand Unification', expression: 'SU(3)×SU(2)×U(1) ⊂ SU(5) or SO(10) at M_GUT ~ 10¹⁶ GeV', description: 'GUT scale unification' },
                        { name: 'Supersymmetry', expression: 'Q|fermion⟩ = |boson⟩, Q|boson⟩ = |fermion⟩', description: 'Supersymmetry transformation' },
                        { name: 'Superstring Action', expression: 'S = -T/(2)∫ d²σ √(-h)h^{αβ}∂_αX^μ∂_βX_μ', description: 'Bosonic string worldsheet action' },
                        { name: 'String Tension', expression: 'T = 1/(2πα\'), α\' = l_s²', description: 'String tension and Regge slope' },
                        { name: 'D-brane Action', expression: 'S_DP = -T_p∫ d^{p+1}ξ e^{-Φ}√(-det(G_ab+B_ab+2πα\'F_ab))', description: 'Dirac-Born-Infeld D-brane action' },
                    ]
                }
            }
        },
        'fluid_mechanics': {
            name: 'Fluid Mechanics',
            description: 'Fluid statics, dynamics, and aerodynamics',
            subcategories: {
                'fluids': {
                    name: 'Fluid Mechanics',
                    formulas: [
                        { name: 'Density', expression: 'ρ = m/V', description: 'Mass density definition' },
                        { name: 'Pressure', expression: 'P = F/A', description: 'Pressure definition' },
                        { name: 'Hydrostatic Pressure', expression: 'P = P₀ + ρgh', description: 'Pressure at depth in fluid' },
                        { name: 'Pascal Principle', expression: 'ΔP = F₁/A₁ = F₂/A₂', description: 'Hydraulic lift pressure transmission' },
                        { name: 'Archimedes Principle', expression: 'F_b = ρ_fluid·V_displaced·g', description: 'Buoyant force on submerged object' },
                        { name: 'Continuity Equation', expression: 'A₁v₁ = A₂v₂ (incompressible)', description: 'Mass flow conservation' },
                        { name: 'Bernoulli Equation', expression: 'P + ½ρv² + ρgh = constant', description: 'Bernoulli energy conservation' },
                        { name: 'Torricelli Law', expression: 'v = √(2gh)', description: 'Efflux speed from hole' },
                        { name: 'Venturi Effect', expression: 'P₁ - P₂ = ½ρ(v₂²-v₁²)', description: 'Pressure drop in constriction' },
                        { name: 'Poiseuille Flow', expression: 'Q = πR⁴ΔP/(8ηL)', description: 'Laminar flow through a pipe' },
                        { name: 'Stokes Law', expression: 'F_d = 6πηrv (sphere in viscous fluid)', description: 'Laminar drag on sphere' },
                        { name: 'Reynolds Number', expression: 'Re = ρvL/η', description: 'Reynolds number for flow regime' },
                        { name: 'Drag Coefficient', expression: 'F_d = ½ρv² C_d A', description: 'Quadratic drag formula' },
                        { name: 'Lift Force', expression: 'F_L = ½ρv² C_L A', description: 'Aerodynamic lift' },
                        { name: 'Surface Tension', expression: 'γ = F/L = ΔW/ΔA', description: 'Surface tension definition' },
                        { name: 'Capillary Rise', expression: 'h = 2γ cos θ/(ρgr)', description: 'Height rise in capillary tube' },
                        { name: 'Laplace Pressure', expression: 'ΔP = γ(1/R₁+1/R₂)', description: 'Pressure across curved surface' },
                        { name: 'Darcy-Weisbach', expression: 'ΔP = f·(L/D)·(ρv²/2)', description: 'Pipe friction head loss' },
                        { name: 'Moody Chart', expression: 'f = f(Re, ε/D) from Colebrook equation', description: 'Friction factor from Moody chart' },
                        { name: 'Colebrook Equation', expression: '1/√f = -2log₁₀((ε/D)/3.7+2.51/(Re√f))', description: 'Implicit friction factor equation' },
                        { name: 'Prandtl Boundary Layer', expression: 'δ(x) = 5.0x/√Re_x', description: 'Laminar boundary layer thickness' },
                        { name: 'Blasius Solution', expression: 'f\'\'\' + ff\'\' = 0, boundary layer velocity profile', description: 'Blasius laminar boundary layer' },
                        { name: 'Mach Number', expression: 'M = v/c_s (speed/sound speed)', description: 'Mach number definition' },
                        { name: 'Speed of Sound (Ideal)', expression: 'c_s = √(γRT/M)', description: 'Speed of sound in ideal gas' },
                        { name: 'Isentropic Flow', expression: 'T₀/T = 1+(γ-1)M²/2', description: 'Stagnation-static temperature relation' },
                        { name: 'Area-Mach Relation', expression: 'A/A* = (1/M)((2+(γ-1)M²)/(γ+1))^{(γ+1)/(2(γ-1))}', description: 'Compressible flow area-velocity relation' },
                        { name: 'Rankine-Hugoniot', expression: 'ρ₂/ρ₁ = (γ+1)M₁²/(2+(γ-1)M₁²)', description: 'Normal shock wave density ratio' },
                        { name: 'Navier-Stokes (Incompressible)', expression: 'ρ(∂v/∂t + v·∇v) = -∇P + μ∇²v + f', description: 'Incompressible Navier-Stokes equation' },
                    ]
                }
            }
        },
        'solid_state': {
            name: 'Solid State & Condensed Matter Physics',
            description: 'Crystal structure, band theory, and material properties',
            subcategories: {
                'solid_state': {
                    name: 'Solid State Physics',
                    formulas: [
                        { name: 'Bragg Law', expression: '2d sin θ = nλ', description: 'X-ray diffraction condition' },
                        { name: 'Miller Indices', expression: '(hkl) intercepts: a/h, b/k, c/l', description: 'Crystallographic plane notation' },
                        { name: 'Interplanar Spacing', expression: '1/d² = h²/a²+k²/b²+l²/c² (orthorhombic)', description: 'Spacing between parallel planes' },
                        { name: 'Reciprocal Lattice', expression: 'G = hb₁ + kb₂ + lb₃, b_i·a_j = 2πδ_{ij}', description: 'Reciprocal lattice vectors' },
                        { name: 'Brillouin Zone', expression: 'Wigner-Seitz cell in reciprocal space', description: 'First Brillouin zone definition' },
                        { name: 'Debye Frequency', expression: 'ω_D = v_s(6π²N/V)^{1/3}', description: 'Debye frequency from sound speed' },
                        { name: 'Debye Temperature', expression: 'Θ_D = ℏω_D/k_B', description: 'Debye temperature definition' },
                        { name: 'Einstein Frequency', expression: 'ω_E = √(k/m)', description: 'Einstein model oscillator frequency' },
                        { name: 'Phonon Dispersion', expression: 'ω(k) = 2√(k/m)|sin(ka/2)|', description: 'Monatomic chain dispersion relation' },
                        { name: 'Group Velocity', expression: 'v_g = dω/dk', description: 'Phonon group velocity' },
                        { name: 'Drude Conductivity', expression: 'σ = ne²τ/m', description: 'Electrical conductivity (Drude model)' },
                        { name: 'Free Electron Density', expression: 'n = Vk_F³/(3π²)', description: 'Electron density from Fermi wavevector' },
                        { name: 'Fermi Wavevector', expression: 'k_F = (3π²n)^{1/3}', description: 'Fermi wavevector from density' },
                        { name: 'Effective Mass', expression: 'm* = ℏ²/(d²E/dk²)', description: 'Effective mass in band structure' },
                        { name: 'E-k in Periodic Potential', expression: 'E(k) near zone boundary: band gaps open', description: 'Nearly free electron model' },
                        { name: 'Semiconductor Band Gap', expression: 'E_g = E_C - E_V', description: 'Energy gap between conduction and valence bands' },
                        { name: 'Intrinsic Carrier Conc.', expression: 'n_i = √(N_cN_v)·e^{-E_g/(2kT)}', description: 'Intrinsic carrier concentration' },
                        { name: 'Conduction Band DOS', expression: 'N_c = 2(2πm_e*kT/h²)^{3/2}', description: 'Effective density of states in CB' },
                        { name: 'Valence Band DOS', expression: 'N_v = 2(2πm_h*kT/h²)^{3/2}', description: 'Effective density of states in VB' },
                        { name: 'Fermi Level (Intrinsic)', expression: 'E_F = (E_C+E_V)/2 + (3kT/4)ln(m_h*/m_e*)', description: 'Intrinsic Fermi level position' },
                        { name: 'PN Junction Built-in', expression: 'V_bi = (kT/q)ln(N_A N_D/n_i²)', description: 'Built-in potential of PN junction' },
                        { name: 'PN Junction Width', expression: 'W = √(2ε(V_bi-V)/(q)(1/N_A+1/N_D))', description: 'Depletion region width' },
                        { name: 'Diode Equation', expression: 'I = I_s(e^{qV/(nkT)}-1)', description: 'Shockley ideal diode equation' },
                        { name: 'MOS Capacitance', expression: 'C = C_oxC_s/(C_ox+C_s)', description: 'MOS capacitor series model' },
                        { name: 'Critical Temperature (BCS)', expression: 'T_c = 1.14Θ_D·e^{-1/(N(0)V)}', description: 'BCS superconducting transition temperature' },
                        { name: 'Cooper Pair Binding', expression: 'E_b = 2ℏω_De^{-2/(N(0)V)}', description: 'BCS Cooper pair binding energy' },
                        { name: 'London Penetration Depth', expression: 'λ_L = √(m/(μ₀n_sq²))', description: 'Magnetic field penetration in superconductor' },
                        { name: 'Coherence Length (BCS)', expression: 'ξ₀ = ℏv_F/(πΔ₀)', description: 'BCS superconducting coherence length' },
                        { name: 'Meissner Effect', expression: 'B = 0 inside superconductor', description: 'Perfect diamagnetism of superconductors' },
                        { name: 'Josephson Current', expression: 'I = I_c sin(δ₁-δ₂)', description: 'DC Josephson effect equation' },
                        { name: 'AC Josephson Effect', expression: 'dV/dt = ℏ/(2e)dδ/dt', description: 'AC Josephson frequency-voltage relation' },
                        { name: 'Quantum Hall Effect', expression: 'R_H = h/(ne²)', description: 'Hall resistance quantization (integer QHE)' },
                        { name: 'Fractional QHE', expression: 'ν = p/q (odd q), e.g. ν=1/3, 2/5', description: 'Fractional quantum Hall filling factors' },
                        { name: 'Curie-Weiss Law', expression: 'χ = C/(T-T_C)', description: 'Magnetic susceptibility near Curie point' },
                        { name: 'Magnetization (Mean Field)', expression: 'M = Nμ_B·tanh(μ_BB_eff/(kT))', description: 'Mean-field magnetization for paramagnet' },
                        { name: 'Spontaneous Magnetization', expression: 'M/M₀ = f(T/T_C) near T_C (β approx)', description: 'Spontaneous magnetization scaling' },
                        { name: 'Landau Free Energy', expression: 'F = a(T-T_C)m² + bm⁴ + ...', description: 'Landau theory of phase transitions' },
                        { name: 'Wiedemann-Franz Law', expression: 'κ/(σT) = L = π²k²/(3e²)', description: 'Thermal-to-electrical conductivity ratio' },
                        { name: 'Lorenz Number', expression: 'L = 2.44×10⁻⁸ W·Ω/K²', description: 'Lorenz number value' },
                        { name: 'Curie Temperature (Fe)', expression: 'T_C(Fe) ≈ 1043 K', description: 'Iron Curie temperature' },
                        { name: 'Peltier Coefficient', expression: 'Π = ST (Peltier-Seebeck relation)', description: 'Peltier cooling coefficient' },
                    ]
                }
            }
        },
        'astrophysics': {
            name: 'Astrophysics & Cosmology',
            description: 'Stellar physics, galaxies, and the cosmos',
            subcategories: {
                'astrophysics': {
                    name: 'Astrophysics',
                    formulas: [
                        { name: 'Stellar Luminosity', expression: 'L = 4πR²σT_eff⁴', description: 'Stefan-Boltzmann for star' },
                        { name: 'Gravitational Binding', expression: 'E_bind = 3GM²/(5R)', description: 'Gravitational binding energy of sphere' },
                        { name: 'Main Sequence L-M', expression: 'L ∝ M^α, α≈3.5 for Sun-like stars', description: 'Mass-luminosity relation for stars' },
                        { name: 'Chandrasekhar Limit', expression: 'M_Ch = 1.44 M_⊙', description: 'Maximum mass of white dwarf' },
                        { name: 'Tolman-Oppenheimer-Volkoff', expression: 'dP/dr = -GM(r)ρ/r²·(1+P/(ρc²))·(1+4πr³P/(M(r)c²))·(1-2GM/(rc²))⁻¹', description: 'TOV equation for neutron stars' },
                        { name: 'TOV Limit', expression: 'M_NS_max ≈ 2.2 M_⊙', description: 'Maximum neutron star mass' },
                        { name: 'Eddington Luminosity', expression: 'L_Edd = 4πGMm_p c/σ_T', description: 'Eddington luminosity limit' },
                        { name: 'Planck Mass', expression: 'm_P = √(ℏc/G) = 2.176×10⁻⁸ kg', description: 'Planck mass' },
                        { name: 'Planck Length', expression: 'l_P = √(ℏG/c³) = 1.616×10⁻³⁵ m', description: 'Planck length' },
                        { name: 'Planck Time', expression: 't_P = √(ℏG/c⁵) = 5.391×10⁻⁴⁴ s', description: 'Planck time' },
                        { name: 'Magnitude-Distance', expression: 'm-M = 5log₁₀(d/10pc)', description: 'Distance modulus formula' },
                        { name: 'Absolute Magnitude', expression: 'M = m - 5log₁₀(d/10pc)', description: 'Absolute magnitude from apparent' },
                        { name: 'Hubble Distance', expression: 'd = c·z/H₀ (low z)', description: 'Distance from Hubble law' },
                        { name: 'Comoving Distance', expression: 'd_c = c/H₀ ∫₀^z dz\'/√(Ω_m(1+z\')³+Ω_Λ)', description: 'Comoving distance to redshift z' },
                        { name: 'Luminosity Distance', expression: 'd_L = (1+z)d_c', description: 'Luminosity distance in cosmology' },
                        { name: 'Angular Diameter Distance', expression: 'd_A = d_c/(1+z)', description: 'Angular diameter distance' },
                        { name: 'Hubble Constant', expression: 'H₀ = 67.4±0.5 km/s/Mpc (Planck 2018)', description: 'Current Hubble constant value' },
                        { name: 'Age of Universe', expression: 't_0 ≈ 13.8×10⁹ years', description: 'Age of universe in ΛCDM' },
                        { name: 'Matter Density', expression: 'Ω_m ≈ 0.315 (Planck 2018)', description: 'Matter density parameter' },
                        { name: 'Dark Energy Density', expression: 'Ω_Λ ≈ 0.685 (Planck 2018)', description: 'Dark energy density parameter' },
                        { name: 'Baryon Density', expression: 'Ω_b ≈ 0.049 (Planck 2018)', description: 'Baryon matter density parameter' },
                        { name: 'Cosmic Inflation', expression: 'a(t) ∝ e^{Ht} (exponential expansion)', description: 'Inflation exponential growth' },
                        { name: 'Saha Equation', expression: 'n_e²/(n_H-n_e) = (2πm_e kT/h²)^{3/2}e^{-E_I/(kT)}', description: 'Recombination ionization equilibrium' },
                        { name: 'Jeans Mass', expression: 'M_J = (πkT/(Gμm_H))^{3/2}·ρ^{-1/2}', description: 'Minimum mass for gravitational collapse' },
                        { name: 'Salpeter IMF', expression: 'dN/dM ∝ M^{-2.35}', description: 'Initial mass function for massive stars' },
                        { name: 'Tully-Fisher Relation', expression: 'L ∝ V_rot⁴ for spiral galaxies', description: 'Galaxy luminosity vs rotation speed' },
                        { name: 'Fundamental Plane', expression: 'R_e ∝ σ²/I_e for elliptical galaxies', description: 'Elliptical galaxy scaling relation' },
                        { name: 'Faber-Jackson', expression: 'L ∝ σ⁴ for elliptical galaxies', description: 'Luminosity-velocity dispersion relation' },
                        { name: 'M-sigma Relation', expression: 'M_BH ∝ σ⁴ (galaxy bulge-supermassive BH)', description: 'Superimposing black hole mass relation' },
                        { name: 'Solberg-Milne', expression: 'Ω(r) ≠ constant in stars, differential rotation', description: 'Solar differential rotation' },
                        { name: 'Lane-Emden Equation', expression: '(1/ξ²)d/dξ(ξ²dθ/dξ) = -θⁿ', description: 'Polytropic stellar structure equation' },
                        { name: 'Main Sequence Lifetime', expression: 'τ_MS ≈ 10¹⁰·(M/M_⊙)^{-2.5} years', description: 'Main sequence stellar lifetime' },
                        { name: 'Type Ia SN Standard Candle', expression: 'M_B ≈ -19.3 (peak absolute magnitude)', description: 'Type Ia supernova luminosity' },
                        { name: 'Olbers Paradox', expression: 'Why night sky is dark: finite universe age + expansion', description: 'Dark sky paradox resolution' },
                        { name: 'CMB Temperature', expression: 'T_CMB = 2.72548±0.00057 K', description: 'Current CMB temperature' },
                        { name: 'CMB Anisotropy', expression: 'ΔT/T ≈ 10⁻⁵ (primordial fluctuations)', description: 'CMB temperature fluctuations amplitude' },
                        { name: 'Baryon Acoustic Oscillations', expression: 'r_s ≈ 150 Mpc (sound horizon at recombination)', description: 'BAO standard ruler scale' },
                        { name: 'Drake Equation', expression: 'N = R_* × f_p × n_e × f_l × f_i × f_c × L', description: 'Number of communicative civilizations' },
                        { name: 'Fermi Paradox', expression: 'If life is common, where is everybody?', description: 'Fermi paradox formulation' },
                        { name: 'Gravitational Lensing (Einstein Radius)', expression: 'θ_E = √(4GM D_ls/(c² D_l D_s))', description: 'Einstein radius for lensing' },
                        { name: 'Weak Lensing Shear', expression: 'γ = Δθ/θ (distortion of background galaxies)', description: 'Cosmic shear from weak lensing' },
                    ]
                }
            }
        },
        'acoustics': {
            name: 'Acoustics',
            description: 'Sound, vibration, and wave phenomena in media',
            subcategories: {
                'acoustics': {
                    name: 'Acoustics',
                    formulas: [
                        { name: 'Sound Speed (Gas)', expression: 'c = √(γRT/M)', description: 'Speed of sound in ideal gas' },
                        { name: 'Sound Speed (Air at 20°C)', expression: 'c_air ≈ 343 m/s', description: 'Speed of sound in standard air' },
                        { name: 'Sound Speed (Water)', expression: 'c_water ≈ 1482 m/s', description: 'Speed of sound in water' },
                        { name: 'Sound Intensity', expression: 'I = p²/(ρc)', description: 'Sound intensity from pressure amplitude' },
                        { name: 'Sound Level (dB)', expression: 'L = 10 log₁₀(I/I₀), I₀ = 10⁻¹² W/m²', description: 'Decibel sound level' },
                        { name: 'Inverse Square Law', expression: 'I ∝ 1/r² for point source', description: 'Sound intensity distance falloff' },
                        { name: 'Acoustic Impedance', expression: 'Z = ρc', description: 'Characteristic acoustic impedance' },
                        { name: 'Intensity Reflection', expression: 'R = ((Z₂-Z₁)/(Z₂+Z₁))²', description: 'Sound reflection coefficient at boundary' },
                        { name: 'Intensity Transmission', expression: 'T = 4Z₁Z₂/(Z₁+Z₂)²', description: 'Sound transmission coefficient' },
                        { name: 'Particle Displacement', expression: 's(x,t) = s₀ cos(kx-ωt)', description: 'Particle displacement in sound wave' },
                        { name: 'Pressure Wave', expression: 'p(x,t) = p₀ sin(kx-ωt)', description: 'Sound pressure variation' },
                        { name: 'Organ Pipe (Open)', expression: 'f_n = nv/(2L), n=1,2,3,...', description: 'Open pipe resonant frequencies' },
                        { name: 'Organ Pipe (Closed)', expression: 'f_n = nv/(4L), n=1,3,5,...', description: 'Closed pipe resonant frequencies' },
                        { name: 'Beats', expression: 'f_beat = |f₁-f₂|', description: 'Beat frequency from two tones' },
                        { name: 'Doppler (Sound)', expression: 'f\' = f(v+v_o)/(v-v_s)', description: 'Sound Doppler shift' },
                        { name: 'Spherical Wave', expression: 'p(r,t) = (A/r)·e^{i(kr-ωt)}', description: 'Outgoing spherical wave' },
                        { name: 'Ultrasound Frequency', expression: 'f > 20 kHz (medical: 1-20 MHz)', description: 'Ultrasonic frequency range' },
                        { name: 'Room Modes', expression: 'f_{n_x,n_y,n_z} = c/2√((n_x/L_x)²+(n_y/L_y)²+(n_z/L_z)²)', description: 'Rectangular room resonant frequencies' },
                        { name: 'Reverberation Time', expression: 'T_60 = 0.161V/A (Sabine formula)', description: 'Room reverberation time' },
                        { name: 'Sabine Absorption', expression: 'A = Σ α_i S_i (total absorption)', description: 'Total acoustic absorption' },
                        { name: 'Loudness (Phon)', expression: 'Phon scale: equal-loudness contours', description: 'Perceived loudness scale' },
                        { name: 'A-Weighting', expression: 'R_A(f) frequency response for human hearing', description: 'A-weighted sound level' },
                        { name: 'Mach Cone Angle', expression: 'sin μ = 1/M for M>1', description: 'Mach cone angle for supersonic source' },
                        { name: 'Sonic Boom', expression: 'N-wave pressure profile at ground', description: 'Sonic boom pressure signature' },
                    ]
                }
            }
        },
        'plasma': {
            name: 'Plasma Physics',
            description: 'Ionized gases, plasma waves, and magnetic confinement',
            subcategories: {
                'plasma': {
                    name: 'Plasma Physics',
                    formulas: [
                        { name: 'Plasma Frequency', expression: 'ω_p = √(n_e e²/(ε₀ m_e))', description: 'Electron plasma oscillation frequency' },
                        { name: 'Debye Length', expression: 'λ_D = √(ε₀ kT_e/(n_e e²))', description: 'Electrostatic screening length' },
                        { name: 'Debye Number', expression: 'N_D = (4π/3)n_eλ_D³', description: 'Number of particles in Debye sphere' },
                        { name: 'Gyroradius', expression: 'r_L = mv_⊥/(|q|B)', description: 'Larmor/gyroradius of charged particle' },
                        { name: 'Gyrofrequency', expression: 'Ω_c = |q|B/m', description: 'Cyclotron/gyrofrequency' },
                        { name: 'Plasma Beta', expression: 'β = 2μ₀n_kT/B²', description: 'Plasma thermal to magnetic pressure ratio' },
                        { name: 'Magnetohydrodynamics', expression: '∂B/∂t = ∇×(v×B) + η∇²B', description: 'MHD induction equation' },
                        { name: 'Frozen-in Flux', expression: 'dΦ/dt = 0 in ideal MHD (η=0)', description: 'Alfvén frozen-in theorem' },
                        { name: 'Alfvén Speed', expression: 'v_A = B/√(μ₀ρ)', description: 'Alfvén wave speed in plasma' },
                        { name: 'Ion Sound Speed', expression: 'c_s = √(γkT_e/m_i)', description: 'Ion acoustic wave speed' },
                        { name: 'Whistler Waves', expression: 'ω = Ω_ce(k²c²/ω_p²)cos θ', description: 'Whistler mode dispersion' },
                        { name: 'Landau Damping', expression: 'γ = -πω_p²/(2k²)·∂f₀/∂v|_{v=ω/k}', description: 'Landau collisionless damping rate' },
                        { name: 'Two-Stream Instability', expression: 'ω² = ω_p1²ω_p2²/(ω_p1²+ω_p2²) (unstable root)', description: 'Buneman two-stream instability' },
                        { name: 'Tokamak Safety Factor', expression: 'q = rB_t/(RB_p)', description: 'Tokamak safety factor' },
                        { name: 'Magnetic Field Line Pitch', expression: 'ι/2π = 1/q', description: 'Rotational transform' },
                        { name: 'Fusion Triple Product', expression: 'nTτ_E > 3×10²¹ m⁻³·keV·s (for D-T ignition)', description: 'Lawson criterion for fusion' },
                        { name: 'Coulomb Logarithm', expression: 'ln Λ = ln(λ_D/b_min)', description: 'Coulomb logarithm for plasma collisions' },
                        { name: 'Spitzer Conductivity', expression: 'σ_∥ = 1.96·(8ε₀²(kT_e)^{3/2})/(√(π m_e)Ze²lnΛ)', description: 'Parallel Spitzer conductivity' },
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
        'Newton 2nd Law': 'Isaac Newton published his three laws of motion in his monumental 1687 work "Philosophi Naturalis Principia Mathematica" (Mathematical Principles of Natural Philosophy). The second law F = ma (originally expressed as F = dp/dt) states that force equals mass times acceleration. The Principia is considered one of the most important scientific works ever written. Newton\'s laws formed the foundation of classical mechanics for over 200 years until Einstein\'s relativity.',
        'Newton\'s Law of Universal Gravitation': 'Newton published the law of universal gravitation in 1687 in his Principia. Inspired by watching an apple fall at his family estate at Woolsthorpe, he realized the same force that pulls the apple to Earth also holds the Moon in orbit. The law F = Gm m/r explained planetary orbits (Kepler\'s laws), ocean tides, and projectile motion under a single framework.',
        'E = mc': 'Albert Einstein derived the mass-energy equivalence E = mc in his 1905 "annus mirabilis" paper "Does the Inertia of a Body Depend Upon Its Energy Content?" as a consequence of special relativity. The formula shows that mass and energy are interchangeable, with the speed of light squared as the conversion factor. It explained the energy source of stars and led to nuclear power. Einstein called it his most important contribution.',
        'Schrdinger Equation (TD)': 'Erwin Schrdinger formulated his famous equation in 1926, during a revolutionary period in physics. Inspired by de Broglie\'s matter wave hypothesis and Hamilton\'s optical-mechanical analogy, Schrdinger developed wave mechanics. The time-dependent equation i/t = H describes how quantum systems evolve. For this work, he shared the 1933 Nobel Prize with Paul Dirac.',
        'Planck Relation': 'Max Planck introduced the relation E = hf in 1900, marking the birth of quantum mechanics. He was studying blackbody radiation and made the radical assumption that energy is quantized in discrete packets he called "quanta." Planck was initially uncomfortable with this idea, considering it a mathematical trick. Planck\'s constant h became one of the most fundamental constants in physics.',
        'Heisenberg Position-Momentum Uncertainty': 'Werner Heisenberg formulated the uncertainty principle in 1927, during the development of quantum mechanics. He realized that certain pairs of physical properties cannot be simultaneously measured with arbitrary precision. The principle x p /2 reflects the wave-particle duality of quantum systems, not measurement limitations.',
        'Maxwell Equations (Differential)': 'James Clerk Maxwell unified electricity and magnetism in his 1865 paper "A Dynamical Theory of the Electromagnetic Field." He added the displacement current term to Ampere\'s law, predicting electromagnetic waves traveling at light speed. This led directly to the theory that light is an electromagnetic wave. Maxwell\'s equations are considered the "second great unification" in physics.',
        'Faraday Law': 'Michael Faraday discovered electromagnetic induction in 1831 through brilliant experimental work, despite having little formal education. He found that a changing magnetic field induces an electric current. The mathematical formulation = -d/dt was given by James Clerk Maxwell. Faraday\'s discovery led to electric generators and the entire electrical power industry.',
        'Coulomb Law': 'Charles-Augustin de Coulomb published the inverse-square law of electrostatic force in 1785 using his torsion balance experiment. The law F = kqq/r describes the force between charged particles. Coulomb\'s work established electrostatics as a quantitative science.',
        'Ohm Law': 'Georg Ohm published his law V = IR in 1827 in his book "Die galvanische Kette, mathematisch bearbeitet." The relationship between voltage, current, and resistance was initially met with hostility for being too simple. Ohm had to resign his teaching position. The law later became fundamental to electrical engineering.',
        'Einstein Field Eq (Full)': 'Einstein presented the field equations of general relativity in November 1915 after nearly a decade of intense work. He struggled with tensor mathematics, learning it from his friend Marcel Grossmann. The equations G + g = 8GT/c describe how matter and energy curve spacetime. The 1919 solar eclipse confirmed light bending, making Einstein a global celebrity.',
        'Schwarzschild Metric': 'Karl Schwarzschild derived the exact solution to Einstein\'s field equations in 1916 while serving on the Russian front during World War I. He submitted the paper from the battlefield and died shortly after. The Schwarzschild radius r = 2GM/c defines the event horizon of a non-rotating black hole.',
        'Hawking Temperature': 'Stephen Hawking derived in 1974 that black holes emit radiation due to quantum effects near the event horizon. The temperature T = c/(8GMk) is inversely proportional to the black hole\'s mass. This discovery unified quantum mechanics, general relativity, and thermodynamics.',
        'Boltzmann Distribution': 'Ludwig Boltzmann (1844-1906) developed the statistical interpretation of entropy in the 1870s. The Boltzmann distribution P e/(kT) describes the probability of a system being in a particular state at temperature T. Boltzmann fought a bitter battle with scientists who denied atoms\' existence. His formula S = k ln W is carved on his tombstone.',
        'Ideal Gas Law': 'The ideal gas law PV = nRT combines Boyle\'s law (1662), Charles\'s law (1787), and Avogadro\'s law (1811). Robert Boyle published the inverse pressure-volume relationship in 1662. Jacques Charles discovered the temperature-volume relationship. Amedeo Avogadro proposed that equal volumes of gases contain equal numbers of molecules. The unified law emerged in the 1830s.',
        'Bernoulli Equation': 'Daniel Bernoulli published his principle of fluid dynamics in his 1738 book "Hydrodynamica." The equation P + v + gh = constant describes energy conservation in flowing fluids. Bernoulli was part of the famous Bernoulli family from Basel, Switzerland, which produced eight notable mathematicians across three generations.',
        'Archimedes Principle': 'Archimedes of Syracuse (287-212 BC) discovered his principle while stepping into a bath and noticing the water rise. According to legend, he ran naked through the streets shouting "Eureka!" The principle states that buoyant force equals weight of displaced fluid.',
        'Navier-Stokes (Incompressible)': 'Claude-Louis Navier derived the equations for viscous fluid flow in 1822. George Gabriel Stokes refined them in 1845. The Navier-Stokes equations describe fluid motion. The Clay Mathematics Institute lists the Navier-Stokes existence and smoothness problem as a $1 million Millennium Prize Problem.',
        'Doppler Effect (Sound)': 'Christian Doppler proposed the effect in 1842 for sound waves. He tested it using musicians playing trumpets on a moving train. The effect was confirmed for light by Hippolyte Fizeau. It is used in radar guns, astronomy (redshift), and ultrasound imaging.',
        'Hubble Law': 'Edwin Hubble announced the expansion of the universe in 1929 based on observations at Mount Wilson Observatory. He found that galaxies recede at speeds proportional to their distance (v = Hd). This discovery transformed cosmology and provided evidence for the Big Bang theory. Hubble was also a champion boxer and Rhodes Scholar.',
        'Carnot Efficiency': 'Nicolas Leonard Sadi Carnot (1796-1832) published his analysis of heat engines in 1824 at age 28. He established the fundamental limits of engine efficiency = 1 - T/T. Carnot died of cholera at 36. His work laid the foundation for the second law of thermodynamics and was crucial for the Industrial Revolution.',
        'Entropy Definition': 'Rudolf Clausius coined the term "entropy" in 1865, deriving it from the Greek word for "transformation." He formulated the second law of thermodynamics: the entropy of the universe tends to increase. Clausius was a German physicist who also made contributions to the kinetic theory of gases and electrodynamics.',
        'Fermi Golden Rule': 'Enrico Fermi (1901-1954) developed the Golden Rule for calculating transition rates in quantum mechanics. Fermi was one of the last great physicists who excelled in both theory and experiment. He built the first nuclear reactor (Chicago Pile-1) in 1942. Element 100 (Fermium) is named after him.',
        'Lorentz Factor': 'Hendrik Lorentz introduced the Lorentz factor = 1/(1-v/c) in 1904 as part of his electron theory. Einstein rederived it from first principles in his 1905 special relativity paper. The factor describes time dilation, length contraction, and relativistic mass increase.',
        'Time Dilation': 'Einstein predicted time dilation in his 1905 special relativity paper. Moving clocks run slow: t = t. The effect was experimentally confirmed by the Hafele-Keating experiment (1971), where atomic clocks flown around the Earth showed measurable time differences. GPS systems must account for both special and general relativistic time dilation.',
        'Kepler 3rd Law': 'Johannes Kepler published his three laws of planetary motion between 1609 and 1619. The third law T = (4/GM)a relates orbital period to semi-major axis. Kepler derived it from Tycho Brahe\'s meticulous astronomical data. Newton later derived it from his law of universal gravitation.',
        'Radioactive Decay Law': 'Ernest Rutherford and Frederick Soddy discovered the exponential law of radioactive decay N(t) = Ne in 1902. Rutherford, called the "father of nuclear physics," discovered the atomic nucleus through his gold foil experiment in 1911. He won the 1908 Nobel Prize in Chemistry.',
        'Photoelectric Effect': 'Albert Einstein explained the photoelectric effect in 1905, showing that light consists of discrete quanta (photons) with energy E = hf. The equation K = hf - describes the maximum kinetic energy of emitted electrons. This work won Einstein the 1921 Nobel Prize and was crucial evidence for quantum theory.',
        'Compton Scattering': 'Arthur Compton discovered the effect named after him in 1923, demonstrating that X-rays scattered by electrons lose energy, confirming the particle nature of light. The wavelength shift = h/(mc)(1-cos) is known as the Compton shift. Compton won the 1927 Nobel Prize for this discovery.',
        'Pauli Exclusion Principle': 'Wolfgang Pauli formulated the exclusion principle in 1925, stating that no two electrons can have the same set of quantum numbers. This principle explains the structure of the periodic table and the stability of matter. Pauli was known for his sharp tongue and the "Pauli effect" - his mere presence was said to break experimental equipment. He won the 1945 Nobel Prize.',
        'Dirac Equation': 'Paul Dirac derived the relativistic equation for electrons in 1928, combining quantum mechanics with special relativity. The equation (i - m) = 0 predicted the existence of antimatter, confirmed with the discovery of the positron in 1932. Dirac shared the 1933 Nobel Prize with Schrdinger. He was notoriously laconic, known for his precise speech.',
        'Fine Structure Constant': 'The fine structure constant 1/137.036 was introduced by Arnold Sommerfeld in 1916 to describe the splitting of spectral lines. It is a dimensionless constant that characterizes the strength of the electromagnetic interaction. Richard Feynman called it "one of the greatest damn mysteries of physics." Its value cannot be predicted by current theory.',
        'Fermi Paradox': 'Enrico Fermi famously asked "Where is everybody?" during a lunch conversation in 1950, highlighting the contradiction between the high probability of extraterrestrial life and the lack of evidence. The Fermi paradox has spawned numerous proposed solutions: the Great Filter, zoo hypothesis, and many others. It remains one of the most intriguing questions in science.',
        'Olbers Paradox': 'Heinrich Olbers (1758-1840) popularized the paradox: if the universe is infinite and filled with stars, the night sky should be bright. The resolution came with the Big Bang theory: the universe has finite age and stars are receding due to expansion, causing light to be redshifted and dimmed.',
        'Drake Equation': 'Frank Drake formulated his equation in 1961 to estimate the number of detectable extraterrestrial civilizations. The equation N = R f n f f f L multiplies factors like star formation rate, fraction of planets that develop life, and civilization lifetime. Most factors are highly uncertain, giving estimates ranging from 1 to millions.',
        'LIGO Detection': 'The Laser Interferometer Gravitational-Wave Observatory (LIGO) detected gravitational waves for the first time on September 14, 2015, from a binary black hole merger 1.3 billion light-years away. The signal, named GW150914, confirmed Einstein\'s 1916 prediction and earned the 2017 Nobel Prize for Rainer Weiss, Barry Barish, and Kip Thorne.',
        'CMB Temperature': 'Arno Penzias and Robert Wilson discovered the cosmic microwave background radiation in 1965 using a horn antenna at Bell Labs. They found a persistent noise at 3.5 K that they could not eliminate, eventually realizing it was the afterglow of the Big Bang. They won the 1978 Nobel Prize. The precise value 2.725 K was measured by the COBE satellite.',
        'Higgs Mechanism': 'Peter Higgs and five other physicists (Englert, Brout, Guralnik, Hagen, Kibble) proposed the Higgs mechanism in 1964 to explain how particles acquire mass. The Higgs boson was finally discovered at CERN\'s Large Hadron Collider in 2012, confirming the theory. Higgs and Englert won the 2013 Nobel Prize.',
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
                               f.description + '. This formula represents a key insight discovered through centuries of ' +
                               'scientific investigation. It continues to be used in modern research, engineering, and education.';
                    }
                }
            }
        }
        return 'No detailed story available for "' + formulaName + '". It is part of the extensive formula database of MathPhys WebOS.';
    }
};

window.PHYSICS = PHYSICS;
