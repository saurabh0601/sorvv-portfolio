export default function Portfolio() {
  const skills = [
    'React',
    'Next.js',
    'Flutter',
    'Node.js',
    'MongoDB',
    'Firebase',
    'Python',
    'Cybersecurity',
    'AWS',
    'Linux'
  ];

  const projects = [
    {
      title: 'Network Traffic Analysis Tool',
      desc: 'Real-time network monitoring and anomaly detection platform.',
      tech: ['Python', 'Cybersecurity', 'Networking']
    },
    {
      title: 'Modern Full Stack Apps',
      desc: 'Responsive full-stack applications with futuristic UI.',
      tech: ['React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.18),transparent_30%)]" />

      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-widest text-cyan-400">
            SAURABH.
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6 text-cyan-300 text-sm">
              Available for Freelance & Full-Time Opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Saurabh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Full Stack & App Developer
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              Building futuristic web experiences, scalable applications,
              and secure digital systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/saurabh0601"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/saurabh-bhati-rajput-0b8835221/"
                target="_blank"
                className="px-6 py-3 rounded-2xl border border-white/20"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Developer & Security Enthusiast</h2>
            <p className="text-gray-400">
              Creating immersive interfaces, secure systems, and powerful digital products.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              I’m Saurabh Bhati, a passionate Full Stack & App Developer with strong
              interests in cybersecurity, cloud systems, and modern UI/UX experiences.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Let’s Build Something Amazing
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:souravbhatirajput@gmail.com"
            className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}
