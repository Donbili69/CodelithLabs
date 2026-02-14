import { Github, ExternalLink } from 'lucide-react';

interface TeamMember {
    name: string;
    username: string;
    avatar: string;
    github: string;
    role: string;
    title: string;
    bio: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Prasanta Ray',
        username: 'Prasanta-ray',
        avatar: 'https://github.com/Prasanta-ray.png',
        github: 'https://github.com/Prasanta-ray',
        role: 'Full Stack Developer',
        title: 'Founder CEO',
        bio: 'Specialized in building scalable web applications with modern technologies.',
    },
    {
        name: 'Donbili69',
        username: 'Donbili69',
        avatar: 'https://github.com/Donbili69.png',
        github: 'https://github.com/Donbili69',
        role: 'CO-founder CTO',
        title: 'UI/UX Engineer',
        bio: 'Passionate about creating beautiful and intuitive user experiences.',
    },
    {
        name: 'Harun Mollah',
        username: 'harun-mollah',
        avatar: 'https://github.com/harun-mollah.png',
        github: 'https://github.com/harun-mollah',
        role: 'Tech Lead',
        title: 'Systems Architect',
        bio: 'Expert in designing robust backend systems and API architectures.',
    },
];

export const Team = () => {
    return (
        <section id="team" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold tracking-wide uppercase mb-6 shadow-lg">
                        <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                        Our Team
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Meet Our{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Expert Team
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Talented professionals dedicated to delivering exceptional solutions and driving innovation at CodelithLabs.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.username}
                            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Card Top Gradient with Pattern */}
                            <div className="h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-0 left-0 w-full h-full bg-dots"></div>
                                </div>
                            </div>

                            {/* Avatar */}
                            <div className="flex justify-center -mt-16 relative z-10 px-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="relative w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="text-center px-6 pt-6 pb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-semibold text-blue-600 mb-1">{member.title}</p>
                                <p className="text-sm text-gray-500 mb-4">{member.role}</p>

                                {/* Bio */}
                                <p className="text-sm text-gray-600 leading-relaxed mb-6 min-h-[3rem]">
                                    {member.bio}
                                </p>

                                {/* GitHub Link */}
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                                >
                                    <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                                    <span>@{member.username}</span>
                                    <ExternalLink size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                </a>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <p className="text-lg text-gray-600 mb-6">
                        Want to join our team?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Get In Touch
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};
