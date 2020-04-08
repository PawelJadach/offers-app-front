import React from 'react'
// import PropTypes from 'prop-types'
import styles from './PostAdd.module.scss';

class PostAdd extends React.Component {
  state = {
    title: '',
    price: 0,
    img: '',
    content: '',
    titleError: '',
    priceError: '',
    imgError: '',
    contentError: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value, 
      [`${e.target.name}Error`]: '',
    });
    switch(e.target.name){
      case 'title':
        this.checkTitle(e.target.value);
      break;
      case 'price':
        this.checkPrice(e.target.value);
      break;
      case 'content':
        this.checkContent(e.target.value);
      break;
      default: 
      break;
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.checkTitle();
    this.checkPrice();
    this.checkContent();
  }

  checkTitle = (value = this.state.title) => {
    const regExp = /^[a-zA-Z0-9-]+$/g;
    const regExpChars = /[a-zA-Z]{5,}/;

    if(value.length < 5 || value.length > 30) {
      this.setState({
        titleError: 'Tytuł powinien zawierać od 5 do 30 znaków!'
      })
    } 

    else if(!regExp.test(value)){
      this.setState({
        titleError: 'Usuń znaki specjalne!'
      })
    }
    
    else if(!regExpChars.test(value)){
      this.setState({
        titleError: 'Tytuł musi zawierać co najmniej 5 liter!'
      })
    }
  }

  checkContent = (value = this.state.content) => {
    const regExp = /^[a-zA-Z0-9-]+$/g;

    if(value.length < 30 || value.length > 1000) {
      this.setState({
        contentError: 'Treść powinna zawierać od 30 do 1000 znaków!'
      })
    } 

    else if(!regExp.test(value)){
      this.setState({
        contentError: 'Usuń znaki specjalne!'
      })
    }
  }


  
  checkPrice = (value = this.state.price) => {
    const regExp = /^[0-9,.]+$/g;

    if(value < 0) {
      this.setState({
        priceError: 'Minimalna cena to 0!'
      })
    } 

    else if(!regExp.test(value)){
      this.setState({
        priceError: 'Cena może zawierać wyłacznie cyfry i przecinek!'
      })
    }
  }

  badImg = (e) => {
    e.preventDefault();
    this.setState({
      imgError: 'Podałeś zły link do zdjęcia!'
    })
  }
 

  render() {
    const { title, price, img, content, titleError, priceError, imgError, contentError } = this.state;
    return (
      <div className={styles.root}>
         <form action="">
           <div className={styles.input}>
            <input autocomplete="off" type="text" id='title' className={titleError ? styles.danger : null} maxLength='30' name='title' placeholder='Wpisz tytuł oferty ...'  value={title} onChange={this.handleChange} required/>
              <label htmlFor="title">Tytuł <p>Max znaków - {title.length}/30</p></label>
              {titleError !== '' ? <div className={styles.error}>{titleError}</div> : null}
           </div>
           <div className={styles.input}>
            <input autocomplete="off" type="number" min="0" className={priceError ? styles.danger : null} id='price' name='price' placeholder='Wpisz cenę ...' value={price} onChange={this.handleChange} required/>
            <label htmlFor="price">Cena</label>
            {priceError !== '' ? <div className={styles.error}>{priceError}</div> : null}
           </div>
           <div className={styles.input}>
            <input autocomplete="off" type="text" id='img' className={imgError ? styles.danger : null} name='img' placeholder='Wprowadź link do zdjęcia ...' value={img} onChange={this.handleChange} required/>
              <label htmlFor="img">Zdjęcie</label>
              { img && imgError === '' ? <div className={styles.img}><img onError={this.badImg} src={img} alt='Preview'/></div> : null}
              {imgError !== '' ? <div className={styles.error}>{imgError}</div> : null}
           </div>
           <div className={styles.input}>
            <textarea autocomplete="off" id='content' name='content'  className={contentError ? styles.danger : null} maxLength='1000' placeholder='Wpisz treść oferty ...' value={content} onChange={this.handleChange} required/>
            <label htmlFor="content" >Opis <p>Max znaków - {content.length}/1000</p></label>
            {contentError !== '' ? <div className={styles.error}>{contentError}</div> : null}
           </div>
           <input type="submit" onClick={this.handleSubmit}/>
         </form>
      </div>
    )
  }
}

// PostAdd.propTypes = {
//   children: PropTypes.array,
// };

export default PostAdd;
