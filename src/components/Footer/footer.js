import React, {Component} from 'react'

class footer extends Component {
    render(){
        
        return(
            
                <footer class="contact-us bg-dark-green clr-white footer">
                    <div class="footer-content flex">
                        <div class="footer-contact-info">
                            <h4>Contact us</h4>
                            <div class="contact-call">
                                <a href="tel:+9722901952" title="our phone" class="clr-white"><span class="fa fa-phone"></span> +9722901952</a>
                            </div>
                            <div class="contact-mail">
                                <a href="mailto:muathkefayah@gmail.com" title="our mail" class="clr-white"><span class="fa fa-envelope-o"></span> MinofEdu@gmail.com</a>
                            </div>
                        </div>
                        <div class="footer-social-media">
                            <h4>Keep in touch</h4>
                            <div><a href="https://www.facebook.com/Palestinian.MOEHE/" class="clr-white"><span class="fa fa-facebook-official"></span> facebook</a></div>
                            <div><a href="" class="clr-white"><span class="fa fa-instagram"></span> instagram</a></div>
                            <div><a href="https://www.youtube.com/user/moheps" class="clr-white"><span class="fa fa-youtube-play"></span> youtube</a></div>
                            <div><a href="https://twitter.com/mohegaza" class="clr-white"><span class="fa fa-twitter"></span> twitter</a></div>
                        </div>
                        <div class="links">
                            <h4>links</h4>
                            <div><a href="" class="clr-white">terms of policy</a></div>
                            <div><a href="" class="clr-white">News</a></div>
                        </div>
                    </div>
                    <div class="copyright">
                        &copy; 2019 - The Ministry of Education
                    </div>
                </footer>

            
        )
    }
}



export default footer;