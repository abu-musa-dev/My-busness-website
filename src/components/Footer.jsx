import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 pb-12 md:pb-16 border-b border-gray-700">

                    {/* Section 1: Brand & Description */}
                    <div className="flex flex-col items-start">
                        {/* Replace with your logo if you have one */}
                        <Link to="/" className="text-white text-3xl font-extrabold mb-4 hover:text-orange-500 transition-colors duration-300">
                            YourBrand
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                            Discover high-quality products designed to enhance your everyday life. We believe in innovation, style, and customer satisfaction.
                        </p>
                        {/* Optional: Company Motto */}
                        <p className="mt-4 text-orange-500 font-semibold text-sm">
                            "Innovation for a Better Tomorrow"
                        </p>
                    </div>

                    {/* Section 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                        <nav className="flex flex-col space-y-3">
                            <Link to="/products" className="hover:text-orange-500 transition-colors duration-300 text-base">
                                All Products
                            </Link>
                            <Link to="/categories" className="hover:text-orange-500 transition-colors duration-300 text-base">
                                Categories
                            </Link>
                            <Link to="/about" className="hover:text-orange-500 transition-colors duration-300 text-base">
                                About Us
                            </Link>
                            <Link to="/contact" className="hover:text-orange-500 transition-colors duration-300 text-base">
                                Contact
                            </Link>
                            <Link to="/faq" className="hover:text-orange-500 transition-colors duration-300 text-base">
                                FAQ
                            </Link>
                        </nav>
                    </div>

                    {/* Section 3: Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
                        <address className="not-italic flex flex-col space-y-3 text-base">
                            <a href="mailto:info@yourbrand.com" className="hover:text-orange-500 transition-colors duration-300 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                info@yourbrand.com
                            </a>
                            <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors duration-300 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                                +1 (234) 567-890
                            </a>
                            <p className="flex items-start">
                                <svg className="w-5 h-5 mr-2 text-gray-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                123 Brand Street, Suite 456<br />
                                City, State 78901, Country
                            </p>
                        </address>
                    </div>

                    {/* Section 4: Newsletter & Social Media */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Stay Connected</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for exclusive offers and updates.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow p-3 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-r-lg font-semibold transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-8">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.446 1.487c.212-.08.43-.075.641.006.21.082.387.214.505.378l2.25 2.76.01.018a3.978 3.978 0 013.91 3.91c-.01 0-.01-.002-.01-.002.394.037.77.152 1.094.33.32.18.594.423.805.694.21.27.35.586.41.936a23.954 23.954 0 000 6c-.06.35-.2.665-.41.936-.21.27-.484.514-.805.694-.324.178-.674.29-1.05.328l-.01.002-.008.003c-.324.03-.654.04-1 .04a23.953 23.953 0 00-6 0c-.347-.008-.686-.02-.999-.052-.02-.005-.04-.008-.057-.013-.274-.067-.534-.176-.777-.323-.243-.146-.453-.33-.615-.544-.162-.213-.274-.45-.333-.701-.005-.02-.009-.04-.015-.06a23.954 23.954 0 000-6c.06-.35.2-.665.41-.936.21-.27.484-.514.805-.694.324-.178.674-.29 1.05-.328l.01-.002.008-.003c.324-.03.654-.04 1-.04a23.953 23.953 0 006 0c.347.008.686.02.999.052.02.005.04.008.057.013.274.067.534.176.777.323.243.146.453.33.615.544.162.213.274.45.333.701.005.02.009-.04.015-.06a23.954 23.954 0 000 6c-.06.35-.2.665-.41.936-.21.27-.484.514-.805.694-.324.178-.674.29-1.05-.328l-.01.002-.008-.003c-.324-.03-.654-.04-1-.04a23.953 23.953 0 00-6 0c-.347-.008-.686-.02-.999-.052-.02-.005-.04-.008-.057-.013-.274-.067-.534-.176-.777-.323-.243-.146-.453-.33-.615-.544-.162-.213-.274-.45-.333-.701-.005-.02-.009-.04-.015-.06a23.954 23.954 0 000-6c.06-.35.2-.665.41-.936.21-.27.484-.514.805-.694.324-.178.674-.29 1.05-.328l-.01-.002-.008-.003c.324-.03.654-.04 1-.04a23.953 23.953 0 006 0zM12 21.32c-.17 0-.34-.002-.51-.008C5.834 21.05 2 17.067 2 12s3.834-9.05 9.49-9.312a2.49 2.49 0 01.51-.008c5.656.26 9.49 4.258 9.49 9.32s-3.834 9.05-9.49 9.312a2.49 2.49 0 01-.51.008z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.31c-.13.06-.27.09-.41.09-.12 0-.24-.02-.35-.06-1.12-.47-1.89-1.57-1.89-2.78 0-1.13.62-2.14 1.63-2.67.09-.04.18-.06.28-.06.07 0 .14.01.2.02.13.04.25.1.35.19l.73.57c.07.05.13.08.2.1.09.02.18 0 .24-.05.06-.05.08-.13.05-.2-.14-.3-.24-.62-.29-.95-.08-.49-.07-.98.05-1.46.06-.25.17-.48.33-.69.17-.21.37-.39.6-.52.23-.14.49-.24.76-.32.27-.07.55-.1.83-.09.33.01.65.09.95.2.3.11.58.26.83.45.26.19.48.42.66.68.18.26.3.56.36.88.08.4-.04.81-.33 1.15-.09.11-.2.2-.32.28-.13.08-.27.12-.42.12-.11 0-.2-.02-.29-.07-.07-.03-.13-.08-.18-.14l-.44-.55c-.09-.11-.19-.2-.3-.26-.13-.06-.26-.07-.39-.02-.09.03-.16.08-.22.15-.05.07-.07.15-.04.22.09.21.16.43.2.65.08.43.07.88-.04 1.3-.06.2-.16.39-.3.55-.13.16-.29.29-.47.38-.18.09-.37.15-.57.17-.3.02-.61-.01-.9-.08-.29-.07-.56-.18-.8-.34-.25-.16-.46-.35-.64-.58-.18-.23-.3-.5-.36-.78-.09-.43-.07-.88.05-1.3l.04-.15c.03-.12.06-.24.08-.36.03-.13.04-.26.04-.39 0-.17-.03-.34-.08-.5-.06-.17-.14-.32-.24-.46-.11-.14-.24-.26-.38-.36-.14-.1-.3-.18-.46-.23-.19-.06-.39-.08-.59-.07-.35.02-.69.11-1 .27-.3.16-.58.36-.82.6-.25.24-.45.5-.6.8-.16.3-.26.63-.3 1-.06.4-.04.82.07 1.21.09.32.22.62.39.89.17.27.37.5.59.69.23.19.48.34.75.44.27.11.55.17.84.19.23.02.46.01.68-.02.22-.03.43-.09.62-.17.06-.02.11-.05.16-.08l.38-.22c.11-.06.2-.12.28-.19.07-.07.12-.15.15-.24.03-.09.03-.19 0-.28-.02-.1-.06-.19-.13-.26-.06-.07-.14-.12-.23-.16-.09-.04-.19-.05-.28-.03-.09.02-.17.06-.24.11l-.54.38c-.24.17-.49.27-.75.31-.26.04-.53.02-.79-.06-.26-.08-.5-.21-.71-.38-.22-.17-.4-.38-.54-.6-.14-.23-.23-.48-.26-.74-.04-.32.06-.65.29-.94.09-.11.2-.2.32-.28.13-.08.27-.12.42-.12.11 0 .2.02.29.07.07.03.13.08.18.14l.44.55c.09.11.19.2.3.26.13.06.26.07.39.02.09-.03.16-.08.22-.15.05-.07.07-.15.04-.22-.09-.21-.16-.43-.2-.65-.08-.43-.07-.88.04-1.3.06-.2.16-.39.3-.55.13-.16.29-.29.47-.38.18-.09.37-.15.57-.17.3-.02.61.01.9.08.29.07.56.18.8.34.25.16.46.35.64.58.18.23.3.5.36.78.09.43.07.88-.05 1.3l-.04.15c-.03.12-.06.24-.08.36-.03.13-.04.26-.04.39 0 .17.03.34.08.5.06.17.14.32.24.46.11.14.24.26.38.36.14.1.3.18.46.23.19.06.39.08.59.07.35-.02.69-.11 1-.27.3-.16.58-.36.82-.6.25-.24.45-.5.6-.8.16-.3.26-.63.3-1 .06-.4.04-.82-.07-1.21-.09-.32-.22-.62-.39-.89-.17-.27-.37-.5-.59-.69-.23-.19-.48-.34-.75-.44-.27-.11-.55-.17-.84-.19-.23-.02-.46-.01-.68.02-.22.03-.43.09-.62.17-.06.02-.11.05-.16.08l-.38.22c-.11.06-.2.12-.28.19-.07.07-.12.15-.15.24-.03.09-.03.19 0 .28.02.1.06.19.13.26.06.07.14.12.23.16.09.04.19.05.28.03.09-.02.17-.06.24-.11l.54-.38c.24-.17.49-.27.75-.31.26-.04.53-.02.79.06.26.08.5.21.71.38.22.17.4.38.54.6.14.23.23.48.26.74.04.32-.06.65-.29.94zM12 21.32c-.17 0-.34-.002-.51-.008C5.834 21.05 2 17.067 2 12s3.834-9.05 9.49-9.312a2.49 2.49 0 01.51-.008c5.656.26 9.49 4.258 9.49 9.32s-3.834 9.05-9.49 9.312a2.49 2.49 0 01-.51.008z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer Section */}
                <div className="pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors duration-300">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-orange-500 transition-colors duration-300">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;