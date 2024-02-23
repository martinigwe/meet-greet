
import './App.css';
import React, { useRef } from "react"
import emailjs from "@emailjs/browser";
import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list';
// import PhoneInput from 'react-phone-number-input';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import {Link} from "react-router-dom";
import Image from "./assets/tom-hardy.jpg";

// import { Link, Navigate } from "react-router-dom";


  

function App() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_98j6l0k', 'template_ezhngia', form.current, {
        publicKey: 'xHaXu-6-AI0j_QUfE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), []);
  const [phone, setPhone] = useState('');

  // <header>
      
  //     <nav className="flex items-center gap-8 justify-between mt-4 text-gray-500 font-semibold">
          
  //         <a href="/" className="text-primary ml-3 font-semibold text-5xl">Tom</a>
  //         <div className="flex gap-8 items-center mr-3 justify-end">
  //         {/* <a href={"/"}><h1></h1>Home</a> */}
  //         <a href=''>Home</a>
  //         <a href={""}>Menu</a>
  //         <a href={""}>About</a>
  //         <a href={""}>Contact</a>
  //         </div>
  //     </nav>
      
  //   </header>

  const changeHandler = value => {
    setValue(value)
  }
  return (
  <div>
    
    
    <div className='mt-4'>
    <img src={Image} className="m-auto  h-screen w-100 rounded-2xl"/>
    </div>
    <div>
      <div><h1 className='text-3xl font-bold my-5 text-center'>Tom Hardy</h1></div>
      <p className='text-gray-700'>
        studying acting at the Drama Centre London, he made his film debut in Ridley Scott‘s
        Black Hawk Down (2001). He had supporting roles in Star Trek: Nemesis (2002) and RocknRolla 
        (2008), and went on to star in Bronson (2008), Warrior (2011), Tinker Tailor Soldier Spy 
        (2011), Lawless (2012), This Means War (2012), and Locke (2013). In 2015, he starred as “Mad” 
        Max Rockatansky in Mad Max: Fury Road and both Kray twins in Legend, and was nominated for 
        the Academy Award for Best Supporting Actor for his role in The Revenant. He has appeared in 
        three Christopher Nolan films: Inception (2010), The Dark Knight Rises (2012) as Bane, and 
        Dunkirk (2017). He has since starred as Eddie Brock/Venom in the film Venom and its 2021 sequel 
        Venom: Let There Be Carnage.
        Hardy’s television roles include the HBO war drama mini-series Band of Brothers (2001), the BBC 
        historical drama mini-series The Virgin Queen (2005), Bill Sikes in the BBC’s mini-series Oliver 
        Twist (2007), Heathcliff in ITV‘s Wuthering Heights (2009), the Sky 1 drama series The Take 
        (2009), and as Alfie Solomons in the BBC crime drama series Peaky Blinders (2014–2022). He 
        created, co-produced, and took the lead in the eight-part historical fiction series Taboo (2017) 
        on BBC One and FX.[1]
        Hardy has performed on both British and American stages. He was nominated for the Laurence 
        Olivier Award for Most Promising Newcomer for his role as Skank in the production of In Arabia 
        We’d All Be Kings (2003), and was awarded the 2003 Evening Standard Theatre Award for Outstanding 
        Newcomer for his performances in both In Arabia We’d All Be Kings and Blood, in which he played 
        Luca. He starred in the production of The Man of Mode (2007) and received positive reviews for his 
        role in the play The Long Red Road (2010). Hardy is active in charity work and is an ambassador for 
        the Prince’s Trust.[2][3] He was appointed a CBE in the 2018 Birthday Honours for services to drama 
      </p>
    </div>
    <div>
      <div><h1 className='text-3xl font-bold my-5 text-center'>His Early Life</h1></div>
      <div>
        <p>
        Edward Thomas Hardy was born in the Hammersmith district of London[6] on 15 September 1977,
        [7][8] the only child of artist and painter Anne (née Barrett) and novelist and comedy writer 
        Edward “Chips” Hardy.[9][10][11] He is of Irish descent on his mother’s side.[12] He was 
        raised in London’s East Sheen suburb.[13] Hardy attended Tower House School, Reed’s School, and 
        Duff Miller Sixth Form College. He later studied at Richmond Drama School and the Drama Centre 
        London, now a part of Central Saint Martins.[14][15] He has named Gary Oldman, with whom he 
        would later work on Tinker Tailor Soldier Spy, as his “hero” and added that he mirrored scenes 
        from Oldman while at drama school.[16][17]
        Hardy at the London premiere of Inception in 2019
        In 1998, Hardy won The Big Breakfast‘s Find Me a Supermodel competition at the age of 21, 
        earning him a brief contract with Models 1.[18] Hardy joined Drama Centre London in September 
        1998, and was taken out early after winning the part of US Army Private John Janovec in the 
        HBO-BBC mini-series Band of Brothers.[19] He made his feature film debut in Ridley Scott‘s war 
        thriller Black Hawk Down (2001).[20] During this time, Hardy also had a brief stint as a rapper 
        and hip hop producer with his friend Edward Tracy (under the name “Tommy No 1 + Eddie Too Tall”), 
        with whom he recorded a mixtape called Falling On Your Arse in 1999 that remained unreleased 
        until 2018.[21] In 2002, Hardy appeared as the Reman Praetor Shinzon, a clone of USS Enterprise
        Captain Jean-Luc Picard in Star Trek: Nemesis.[22] The following year, he appeared in the film 
        Dot the i, and then travelled to North Africa for Simon: An English Legionnaire, a story of the 
        French Foreign Legion. He then returned to the United Kingdom to feature in the horror film LD 
        50 Lethal Dose (2003).[23]

        Hardy was awarded the 2003 London Evening Standard Theatre Award for Outstanding Newcomer for his
        performances in Blood and In Arabia We’d All Be Kings performed at the Royal Court Theatre and 
        Hampstead Theatre.[24] He was also nominated for a 2004 Laurence Olivier Award for Most Promising 
        Newcomer of 2003 in a Society of London Theatre Affiliate for his performance as Skank in the 
        aforementioned production of In Arabia We’d All Be Kings.[25] Hardy appeared with Emilia Fox in 
        the BBC mini-series The Virgin Queen (2005) as Robert Dudley, a childhood friend of Elizabeth I. 
        Dudley’s character has been described as an ambiguous young man who is torn between the affection 
        of his wife (played by Fox), his love for Elizabeth, and his own ambitions.[26] Hardy featured in 
        the BBC Four adaptation of the 1960s science fiction series A for Andromeda.[27]

        In 2007, he appeared in BBC Two‘s drama based on a true story, Stuart: A Life Backwards. 
        He played the lead role of Stuart Shorter, a homeless man who had been subjected to years of 
        abuse and whose death was possibly a suicide.[28] The same year he played Bill Sikes in the BBC 
        mini-series Oliver Twist, an adaptation of Charles Dickens‘s novel that aired on PBS Masterpiece 
        Classic in the US. In February 2008, he played a drug-addicted rapist in the British 
        horror-thriller WΔZ.[29] In September 2008, he appeared in Guy Ritchie‘s London gangster film, 
        RocknRolla; Hardy played the role of gay gangster Handsome Bob.[30] In 2008, Hardy starred in the 
        film Bronson, about the real-life English prisoner Charles Bronson, who has spent most of his adult 
        life in solitary confinement. For the film, he put on three stone (42 lb or 19 kg).[31]

        In June 2009, Hardy starred in Martina Cole‘s four-part TV drama The Take on Sky One, as a drug and 
        alcohol-fuelled gangster. The role gained him a Best Actor nomination at the 2009 Crime Thriller 
        Awards.[32] In August 2009, he appeared in ITV‘s Wuthering Heights, playing the role of Heathcliff.
        [33][34] In early 2010, Hardy starred in The Long Red Road at the Goodman Theatre in Chicago.[35] 
        The play was written by Brett C. Leonard and directed by Philip Seymour Hoffman. Hardy won some good 
        reviews for his portrayal of Sam, an alcoholic trying to drink away his past.[36][37] In 2010, he 
        starred as Eames in Christopher Nolan‘s science fiction thriller Inception for which he won a BAFTA 
        Rising Star award. Hardy replaced Michael Fassbender in the 2011 film adaptation of Tinker Tailor 
        Soldier Spy,[38] released on 5 September 2011 at the 68th edition of the Mostra Internazionale 
        d’Arte Cinematografica in Venice. In March 2010, Hardy signed a first-look deal at Warner Bros.[39]

        In 2011, Hardy appeared in the film Warrior, which was released on 9 September 2011 by Lionsgate 
        Films. His performance as Tommy Riordan, who is trained by his father to fight in a mixed martial 
        arts tournament against his brother, gained praise from critics. Hardy also starred in This Means 
        War (2012), a romantic comedy directed by McG. He played the supervillain Bane in The Dark Knight 
        Rises, the final film in Christopher Nolan‘s The Dark Knight Trilogy, released on 20 July 2012.[40] 
        He played a bootlegger in John Hillcoat‘s crime drama Lawless (2012).[41] Hardy has signed up to 
        play the lead role of Sam Fisher in Ubisoft‘s forthcoming film adaptation of their video game series 
        Tom Clancy’s Splinter Cell.[42][43] He also appeared in Riz Mc‘s music video for the song “Sour 
        Times”.[44]
        </p>
      </div>
    </div>
    <form className='my-5 bg-gray-100' ref={form} onSubmit={sendEmail}>
    <div>
      <label>Name <span className='text-primary'>*</span></label>
      <input type='text' name='name' placeholder='Name'/>
    </div>
      <div className='mt-4'>
      <label  className='pt-5'>Email <span className='text-primary'>*</span></label>
      <input type='email' name='email' placeholder='Email'/>
      </div>
      <div className='mt-4'>
      <label >Country <span className='text-primary'>*</span></label>
      <Select name='country' options={options} value={value} onChange={changeHandler} />
      </div>
      <div className='mt-4'>
      <label>Phone Number <span className='text-primary'>*</span></label>
      
      <PhoneInput
        defaultCountry="ua"
        value={phone}
        name='number'
        onChange={(phone) => setPhone(phone)}
      />
      </div>
      <div className='mt-4'>
        <label>Preferred Meeting Piont <span className='text-primary'>*</span></label>
        <input type='text' name='place to meet' placeholder='State your meeting point'/>
      </div>
      <div className='mt-4'>
        <label>Favorite Celebrity <span className='text-primary'>*</span></label>
        <input type='text' name='favorite' placeholder='State your favorite celebrity'/>
      </div>
      <div className='mt-4'>
        <label>Message</label>
        <textarea name='message'/>
      </div>
      <div className='mt-4'>
        <button className='primary'>Book</button>
      </div>
    </form>
    <footer className='bg-gray-700'>
      <div className='max-w-2xl mx-auto text-white py-10 text-center'>
        <p>Copyright © 2024 Tom Hardy</p>
      </div>
    </footer>
  </div>
  );
}

export default App;
