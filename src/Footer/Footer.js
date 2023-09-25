import React from 'react';
import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';


export function Footer() {
    return (
                    <div className="footer-container">
                        <div className="container tbfooter-logo-link-wrapper">
                            <div className="row">
                                <div className="tbfooter-address-wrapper tbfooter-column-wrapper bottom-to-top hb-animate-element hb-in-viewport">
                                    <div className="tbfooter-address">
                                        <div id="footer_sub_menu_store_info">
                                            <div className="tbfooter-title-wrapper" >
                                                <div className="tbfooter-title">Address</div>
                                            </div>
                                            <div id="tbfooter-address-wrapper"className="tbfooter-link-wrapper">
                                                <div className="tbfooter-store-link tbfooter-contact-icon-map">
                                                    <div className="tbfooter-address-outer">
                                                        <div className="tbfooter-address-lable">Address:</div>
                                                        Capt.Sindo, Marikina City
                                                        </div>
                                                    </div>
                                                    <div className="tbfooter-store-link tbfooter-contact-icon-phone">
                                                        <div className="tbfooter-address-outer">
                                                             Phone: 
                                                            <span>(+63) 969-519-1508</span>
                                                        </div>
                                                    </div>
                                                    <div className="tbfooter-store-link tbfooter-contact-icon-mail">
                                                        <div className="tbfooter-address-outer"> 
                                                            Email: 
                                                            <a href="#" className="dropdown">Grazie1322onlinestore@gmail.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tbfooter-linklist-wrapper tbfooter-column-wrapper bottom-to-top hb-animate-element hb-in-viewport">
                                        <div className="tbfooter-title-wrapper collapsed">
                                            <span className="tbfooter-title">Our company</span>
                                        </div>
                                        <ul id="footer_sub_menu_link36722" className="tbfooter-link-wrapper">
                                            <li>
                                                <NavLink as={Link} to="/grazie-1332/FAQ" id="link-cms-page-1-2" className="cms-page-link" title="Frequently Asked Questions">FAQs</NavLink>
                                            </li>
                                            <li>
                                                <NavLink as={Link} to="/grazie-1332/privacy-policy" className="cms-page-link" title="Privacy Policy">Privacy Policy</NavLink>
                                            </li>
                                            <li>
                                                <a id="link-cms-page-3-2" className="cms-page-link" href="" title="Our terms and conditions of use">Terms and conditions of use</a>
                                            </li>
                                            <li>
                                                <NavLink as={Link} to="/grazie-1332/about-us" id="link-cms-page-4-2" className="cms-page-link" title="Learn more about us">About us</NavLink>
                                            </li>
                                            <li>
                                                <a id="link-cms-page-5-2" className="cms-page-link" href="" title="Our secure payment method">Secure payment</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="block_myaccount_infos" className="tbfooter-column-wrapper bottom-to-top hb-animate-element hb-in-viewport">
                                        <div className="tbfooter-title-wrapper">
                                            <span className="tbfooter-title">Account</span>
                                        </div>
                                        <ul id="footer_sub_menu_myaccount" className="account-list">
                                            <li>
                                                <a href="" title="Personal info" rel="nofollow">Personal info</a>
                                            </li>
                                            <li>
                                                <a href="" title="Orders" rel="nofollow">Orders</a>
                                            </li>
                                            <li>
                                                <a href="" title="Credit slips" rel="nofollow">Credit slips</a>
                                            </li>
                                            <li>
                                                <a href="" title="Addresses" rel="nofollow">Addresses</a>
                                            </li>
                                            <li className="item">
                                                <a className="link_compare " href="" title="My wishlists">My wishlists</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tbfooter-copy-payment-icon-wrapper">
                                    <div className="container tbfooter-copy-payment-icon-content">
                                        <div className="tbfooter-copy-payment-icon">
                                            <div className="row tbfooter-copy-payment-icon-inner">
                                                <div className="tbsocial-wrapper">
                                                    <div className="tbcmsfooter-social-icon">
                                                        <div className="tbsocial-title-wrapper">
                                                            <span className="tbsocial-title">Social</span>
                                                        </div>
                                                        <ul id="footer_sub_menu_social_icon" className="tbfooter-social-icon-wrapper">
                                                            <li className="facebook">
                                                                <a href="#">
                                                                    <span className="social-icon"></span>
                                                                    <span className="tbsocial-title">Facebook</span>
                                                                </a>
                                                            </li>
                                                            <li className="twitter">
                                                                <a href="#">
                                                                    <span className="social-icon"></span>
                                                                    <span className="tbsocial-title">Twitter</span>
                                                                </a>
                                                            </li>
                                                            <li className="youtube">
                                                                <a href="#">
                                                                    <span className="social-icon"></span>
                                                                    <span className="tbsocial-title">Youtube</span>
                                                                </a>
                                                            </li>
                                                            <li className="pinterest">
                                                                <a href="#">
                                                                    <span className="social-icon"></span>
                                                                    <span className="tbsocial-title">Vimeo</span>
                                                                </a>
                                                            </li>
                                                            <li className="instagram">
                                                                <a href="#">
                                                                    <span className="social-icon"></span>
                                                                    <span className="tbsocial-title">Instagram</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tbcopylink-wrapper">
                                                    <div className="tbcopylink">
                                                        <a href="#">
                                                            <p>Copyright © 2023 - Grazie 1332 All rights reserved</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
);
}
