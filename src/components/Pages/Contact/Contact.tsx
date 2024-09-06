import './Contact.css'

export function Contact(){
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

  return(
    <div className="adapt-to-container">
      <div className="contact">
        <h2 className="text-h2 text-gradient">Contactez moi</h2>

        <p className="text-gradient text-h3">N'hésitez pas à me contacter à tout moment,
          je vous répondrai dès que possible
        </p>
      </div>

      <form onSubmit={handleForm} className='contact__form'>
        <input type="text" name='name' id='name' placeholder='Nom' className='contact__form-input'/>
        <input type="email" name='email' id='email' required placeholder='Email' className='contact__form-input' />
        <textarea 
          className="contact__form-textarea"
          name="message" id="message" placeholder="Message" onKeyUp={handleTextAreaHeight}
        ></textarea>

        <button className='button'>
          <div className='button__content'>Envoyer</div>
          <div className='button__background-to-top'></div>
        </button>
      </form>
    </div>
  )
}