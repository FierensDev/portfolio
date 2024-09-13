import './Contact.css'
import MailSvg from '../../../assets/mail.svg'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export function Contact(){

  const [submitState, setSubmitState] = useState(400)

  function handleForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  function handleTextAreaHeight(e: React.KeyboardEvent<HTMLTextAreaElement>){
    // const target = e.target as HTMLTextAreaElement;
    // let scrollHeight = target.scrollHeight;
    // console.log(scrollHeight);
    // target.style.height = "auto"
    // target.style.height = `${scrollHeight}px`;
  };

  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
    setSubmitState(102);

    emailjs
      .sendForm('service_9zbkohp', 'template_wea51pg', form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_API_KEY,
      })
      .then(
        (r) => {
          console.log('email sent!', r);
          if(r.status === 200){
            setSubmitState(200);
          } 
        },
        (error) => {
          setSubmitState(400)
          console.log('FAILED...', error);
        },
      );
  };

  return(
    <div className="adapt-to-container">
      <div className="contact">
        <h2 className="text-h2 text-gradient">Contactez moi</h2>

        <p className="text-gradient text-h3">N'hésitez pas à me contacter à tout moment,
          je vous répondrai dès que possible
        </p>
      </div>

      <div className='container__social-media'>
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input type="text" name='user_name' id='name' placeholder='Nom' className='contact__form-input'/>
          <input type="email" name='user_email' id='email' required placeholder='Email' className='contact__form-input' />
          <textarea 
            className="contact__form-textarea"
            name="message" id="message" placeholder="Message" onKeyUp={handleTextAreaHeight}
          ></textarea>

          <button className={submitState === 0 ? 'button' : submitState === 102 ? 'button button-wait' : submitState === 200 ? 'button button-sent' : submitState === 400 ? 'button button-error' : 'button button-error'} disabled={submitState > 0}>
            {submitState === 0 ? 
              <div className='button__content'>Envoyer</div>
            :
            submitState === 102 ? 
              <div className='text-color-text'>Envoie en cours</div>
            :
            submitState === 200 ? 
             <div className='text-color-text'>Message envoyé !</div>
            :
            submitState === 400 ? 
            <div className='text-color-error'>Erreur veuillez réessayer plus tard...</div>
           :
              <></>
            }
           
            {submitState > 0 ? 
             <></>
             :
             <div className='button__background-to-top'></div>
            }
          </button>
        </form>


        <div className='contact__social-media'>
          <a href="mailto:denis.fierens@epitech.eu" target="_blank" className='social-media'>
            <div className='social-media__square'>
              <div className='button__content test'>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.87868 0.87868C0 1.75736 0 3.17157 0 6V8C0 10.8284 0 12.2426 0.87868 13.1213C1.75736 14 3.17157 14 6 14H12C14.8284 14 16.2426 14 17.1213 13.1213C18 12.2426 18 10.8284 18 8V6C18 3.17157 18 1.75736 17.1213 0.87868C16.2426 0 14.8284 0 12 0H6C3.17157 0 1.75736 0 0.87868 0.87868ZM3.5547 3.16795C3.09517 2.8616 2.4743 2.98577 2.16795 3.4453C1.8616 3.90483 1.98577 4.5257 2.4453 4.83205L7.8906 8.46225C8.5624 8.91012 9.4376 8.91012 10.1094 8.46225L15.5547 4.83205C16.0142 4.5257 16.1384 3.90483 15.8321 3.4453C15.5257 2.98577 14.9048 2.8616 14.4453 3.16795L9 6.79815L3.5547 3.16795Z" />
                </svg>
              </div>
              <div className='button__background-to-top'></div>
            </div>
            <div className='social-media__text'>
              <p className='color-white text-20'>Mail</p>
              <p className='color-gradient onhover-color-white'>denis.fierens@epitech.eu</p>
            </div>
          </a>

          <a href='https://www.linkedin.com/in/fierensdenis' target="_blank" className='social-media'>
            <div className='social-media__square'>
              <div className='button__content test'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.4325C0 0.64125 0.6575 0 1.46875 0H18.5312C19.3425 0 20 0.64125 20 1.4325V18.5675C20 19.3587 19.3425 20 18.5312 20H1.46875C0.6575 20 0 19.3587 0 18.5675V1.4325ZM6.17875 16.7425V7.71125H3.1775V16.7425H6.17875ZM4.67875 6.4775C5.725 6.4775 6.37625 5.785 6.37625 4.9175C6.3575 4.03125 5.72625 3.3575 4.69875 3.3575C3.67125 3.3575 3 4.0325 3 4.9175C3 5.785 3.65125 6.4775 4.65875 6.4775H4.67875ZM10.8138 16.7425V11.6988C10.8138 11.4288 10.8337 11.1587 10.9137 10.9662C11.13 10.4275 11.6238 9.86875 12.4538 9.86875C13.54 9.86875 13.9738 10.6962 13.9738 11.9113V16.7425H16.975V11.5625C16.975 8.7875 15.495 7.4975 13.52 7.4975C11.9275 7.4975 11.2137 8.3725 10.8138 8.98875V9.02H10.7938L10.8138 8.98875V7.71125H7.81375C7.85125 8.55875 7.81375 16.7425 7.81375 16.7425H10.8138Z" fill="currentColor"/>
                </svg>
              </div>
              <div className='button__background-to-top'></div>
            </div>
            <div className='social-media__text'>
              <p className='color-white text-20'>Linkedin</p>
              <p className='color-gradient onhover-color-white'>fierensdenis</p>
            </div>
          </a>

          <a href="https://www.instagram.com/d.fierens_" target="_blank" className='social-media'>
            <div className='social-media__square'>
              <div className='button__content test'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C7.28625 0 6.945 0.0125 5.87875 0.06C4.8125 0.11 4.08625 0.2775 3.45 0.525C2.78231 0.775407 2.17768 1.16925 1.67875 1.67875C1.16925 2.17768 0.775407 2.78231 0.525 3.45C0.2775 4.085 0.10875 4.8125 0.06 5.875C0.0125 6.94375 0 7.28375 0 10.0013C0 12.7163 0.0125 13.0563 0.06 14.1225C0.11 15.1875 0.2775 15.9137 0.525 16.55C0.78125 17.2075 1.1225 17.765 1.67875 18.3212C2.23375 18.8775 2.79125 19.22 3.44875 19.475C4.08625 19.7225 4.81125 19.8912 5.87625 19.94C6.94375 19.9875 7.28375 20 10 20C12.7163 20 13.055 19.9875 14.1225 19.94C15.1863 19.89 15.915 19.7225 16.5513 19.475C17.2185 19.2244 17.8227 18.8306 18.3212 18.3212C18.8775 17.765 19.2188 17.2075 19.475 16.55C19.7213 15.9137 19.89 15.1875 19.94 14.1225C19.9875 13.0563 20 12.7163 20 10C20 7.28375 19.9875 6.94375 19.94 5.87625C19.89 4.8125 19.7213 4.085 19.475 3.45C19.2246 2.78231 18.8308 2.17768 18.3212 1.67875C17.8223 1.16925 17.2177 0.775407 16.55 0.525C15.9125 0.2775 15.185 0.10875 14.1213 0.06C13.0538 0.0125 12.715 0 9.9975 0H10ZM9.10375 1.8025H10.0013C12.6713 1.8025 12.9875 1.81125 14.0413 1.86C15.0162 1.90375 15.5462 2.0675 15.8988 2.20375C16.365 2.385 16.6987 2.6025 17.0487 2.9525C17.3988 3.3025 17.615 3.635 17.7963 4.1025C17.9338 4.45375 18.0963 4.98375 18.14 5.95875C18.1887 7.0125 18.1987 7.32875 18.1987 9.9975C18.1987 12.6663 18.1887 12.9837 18.14 14.0375C18.0963 15.0125 17.9325 15.5413 17.7963 15.8938C17.6348 16.3274 17.3791 16.7197 17.0475 17.0425C16.6975 17.3925 16.365 17.6088 15.8975 17.79C15.5475 17.9275 15.0175 18.09 14.0413 18.135C12.9875 18.1825 12.6713 18.1938 10.0013 18.1938C7.33125 18.1938 7.01375 18.1825 5.96 18.135C4.985 18.09 4.45625 17.9275 4.10375 17.79C3.66979 17.6291 3.277 17.3738 2.95375 17.0425C2.62159 16.7195 2.36541 16.3267 2.20375 15.8925C2.0675 15.5412 1.90375 15.0113 1.86 14.0363C1.8125 12.9825 1.8025 12.6663 1.8025 9.995C1.8025 7.32375 1.8125 7.01 1.86 5.95625C1.905 4.98125 2.0675 4.45125 2.205 4.09875C2.38625 3.6325 2.60375 3.29875 2.95375 2.94875C3.30375 2.59875 3.63625 2.3825 4.10375 2.20125C4.45625 2.06375 4.985 1.90125 5.96 1.85625C6.8825 1.81375 7.24 1.80125 9.10375 1.8V1.8025ZM15.3387 3.4625C15.1812 3.4625 15.0251 3.49354 14.8795 3.55384C14.7339 3.61415 14.6017 3.70254 14.4902 3.81397C14.3788 3.9254 14.2904 4.05769 14.2301 4.20328C14.1698 4.34887 14.1388 4.50491 14.1388 4.6625C14.1388 4.82009 14.1698 4.97613 14.2301 5.12172C14.2904 5.26731 14.3788 5.3996 14.4902 5.51103C14.6017 5.62246 14.7339 5.71085 14.8795 5.77116C15.0251 5.83146 15.1812 5.8625 15.3387 5.8625C15.657 5.8625 15.9622 5.73607 16.1873 5.51103C16.4123 5.28598 16.5387 4.98076 16.5387 4.6625C16.5387 4.34424 16.4123 4.03902 16.1873 3.81397C15.9622 3.58893 15.657 3.4625 15.3387 3.4625ZM10.0013 4.865C9.32009 4.85437 8.64362 4.97936 8.01122 5.23268C7.37883 5.486 6.80314 5.86259 6.31769 6.34053C5.83223 6.81847 5.4467 7.38821 5.18355 8.01657C4.9204 8.64494 4.78488 9.31938 4.78488 10.0006C4.78488 10.6819 4.9204 11.3563 5.18355 11.9847C5.4467 12.613 5.83223 13.1828 6.31769 13.6607C6.80314 14.1387 7.37883 14.5153 8.01122 14.7686C8.64362 15.0219 9.32009 15.1469 10.0013 15.1363C11.3494 15.1152 12.6353 14.5649 13.5812 13.6041C14.5272 12.6432 15.0574 11.349 15.0574 10.0006C15.0574 8.65228 14.5272 7.35802 13.5812 6.39719C12.6353 5.43636 11.3494 4.88603 10.0013 4.865ZM10.0013 6.66625C10.439 6.66625 10.8726 6.75248 11.277 6.92002C11.6815 7.08755 12.049 7.33312 12.3586 7.64268C12.6681 7.95225 12.9137 8.31976 13.0812 8.72423C13.2488 9.1287 13.335 9.56221 13.335 10C13.335 10.4378 13.2488 10.8713 13.0812 11.2758C12.9137 11.6802 12.6681 12.0477 12.3586 12.3573C12.049 12.6669 11.6815 12.9124 11.277 13.08C10.8726 13.2475 10.439 13.3337 10.0013 13.3337C9.11709 13.3337 8.26913 12.9825 7.64393 12.3573C7.01873 11.7321 6.6675 10.8842 6.6675 10C6.6675 9.11583 7.01873 8.26788 7.64393 7.64268C8.26913 7.01748 9.11709 6.66625 10.0013 6.66625Z" fill="currentColor"/>
                </svg>
              </div>
              <div className='button__background-to-top'></div>
            </div>
            <div className='social-media__text'>
              <p className='color-white text-20'>Instagram</p>
              <p className='color-gradient onhover-color-white'>@d.fierens_</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}