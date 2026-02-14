import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react';

export const PrivacyPolicy = () => {
    return (
        <section id="privacy" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold tracking-wide uppercase mb-6 shadow-lg">
                        <Shield className="w-4 h-4 mr-2" />
                        Privacy Policy
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Your Privacy{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Matters
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Last updated: February 14, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {/* Introduction */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            At Codelithlabs, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </div>

                    {/* Information We Collect */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-8 h-8 text-blue-600" />
                            <h2 className="text-3xl font-bold text-gray-900 m-0">Information We Collect</h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Personal Information</h3>
                            <p>We may collect personal information that you voluntarily provide to us when you:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Fill out contact forms on our website</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Request information about our services</li>
                                <li>Engage with our AI chatbot</li>
                            </ul>
                            <p>This information may include:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name and contact information (email address, phone number)</li>
                                <li>Company name and job title</li>
                                <li>Project requirements and preferences</li>
                                <li>Any other information you choose to provide</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Automatically Collected Information</h3>
                            <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>IP address and browser type</li>
                                <li>Operating system and device information</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Clickstream data</li>
                            </ul>
                        </div>
                    </div>

                    {/* How We Use Your Information */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <UserCheck className="w-8 h-8 text-blue-600" />
                            <h2 className="text-3xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Send you information about our services and updates</li>
                                <li>Improve our website and services</li>
                                <li>Analyze usage patterns and optimize user experience</li>
                                <li>Prevent fraud and enhance security</li>
                                <li>Comply with legal obligations</li>
                                <li>Send marketing communications (with your consent)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Information Sharing */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Eye className="w-8 h-8 text-blue-600" />
                            <h2 className="text-3xl font-bold text-gray-900 m-0">Information Sharing and Disclosure</h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
                            </ul>
                        </div>
                    </div>

                    {/* Data Security */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Lock className="w-8 h-8 text-blue-600" />
                            <h2 className="text-3xl font-bold text-gray-900 m-0">Data Security</h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p>We implement appropriate technical and organizational security measures to protect your personal information, including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security assessments and updates</li>
                                <li>Access controls and authentication</li>
                                <li>Secure data storage and backup procedures</li>
                            </ul>
                            <p className="mt-4">However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
                        </div>
                    </div>

                    {/* Your Rights */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Access:</strong> Request access to your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                            </ul>
                            <p className="mt-4">To exercise these rights, please contact us at team.codelithlabs@gmail.com</p>
                        </div>
                    </div>

                    {/* Cookies */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.</p>
                        </div>
                    </div>

                    {/* Third-Party Links */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
                        </div>
                    </div>

                    {/* Children's Privacy */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
                        </div>
                    </div>

                    {/* Changes to Policy */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                        <div className="flex items-center gap-3 mb-4">
                            <Mail className="w-8 h-8 text-blue-600" />
                            <h2 className="text-3xl font-bold text-gray-900 m-0">Contact Us</h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                            <ul className="space-y-2">
                                <li><strong>Email:</strong> team.codelithlabs@gmail.com</li>
                                <li><strong>Phone:</strong> +1 (234) 567-890</li>
                                <li><strong>Address:</strong> Kokrajhar, Assam, India</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
