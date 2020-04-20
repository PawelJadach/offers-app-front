import React from 'react'
import styles from './OfferEdit.module.scss';
import { connect } from 'react-redux'
import { editOffer, addedToFalse } from '../../../redux/actions/postActions';
import Loader from 'react-loader-spinner'
import Axios from 'axios';
import { API_URL } from '../../../constants/constants';

class OfferEdit extends React.Component {
  state = {
    title: '',
    price: 0,
    photo: '',
    text: '',
    titleError: '',
    priceError: '',
    photoError: '',
    textError: '',
    editSuccess: '',
    isFetching: true,
  }

  componentDidMount(){
    Axios
    .get(`${API_URL}/posts/${this.props.match.params.id}`)
    .then(res => {
      if(res.status === 200){
        const { title, price, photo, text } = res.data;
        this.setState({
          title,
          price,
          photo,
          text,
          isFetching: false,
        })
      }
    })
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
      case 'text':
        this.checkContent(e.target.value);
      break;
      default: 
      break;
    }
  }

  handleSubmit = e => {
    const { titleError, photoError, textError, priceError, title, price, photo, text } = this.state;
    e.preventDefault();
    this.checkTitle();
    this.checkPrice();
    this.checkContent();
    if(titleError === '' && photoError === '' && textError === '' && priceError === ''){
      this.props.editOffer({ photo: photo, text: text, price: price, title: title, authorEmail: this.props.email, id: Number(this.props.match.params.id) });
    }
  }

  checkTitle = (value = this.state.title) => {
    const regExp = /^[0-9\s\p{L} ,--.!:()]+$/u;
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

  checkContent = (value = this.state.text) => {
    const regExp = /^[0-9\s\p{L} ,--.!:()]+$/u;

    if(value.length < 30 || value.length > 1000) {
      this.setState({
        textError: 'Treść powinna zawierać od 30 do 1000 znaków!'
      })
    } 

    else if(!regExp.test(value)){
      this.setState({
        textError: 'Usuń znaki specjalne!'
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

    else if(value.length > 14 ) {
      this.setState({
        priceError: 'Max 14 znaków!'
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
      photoError: 'Podałeś zły link do zdjęcia!'
    })
  }

  postEdited = () => {

    this.props.addedToFalse();
    this.setState({
      editSuccess: 'Ogłoszenie edytowane!',
    })

    setTimeout(() => {
      this.setState({
        editSuccess: '',
      })
    }, 2000)
  }
 

  render() {
    const { title, price, photo, text, titleError, priceError, photoError, textError, editSuccess } = this.state;

    if(this.props.loading) return ( 
      <div className={styles.center}>
        <Loader
          type="Grid"
          color="rgba(43, 45, 66, 1)"
          height={100}
          width={100}
        />
      </div>
    )
    if(this.props.added) this.postEdited();
    return (
      <div className={styles.root}>
         <form>
         {editSuccess ? <div className={styles.success}>{editSuccess}</div> : null}
           <div className={styles.input}>
            <input autoComplete="off" type="text" id='title' className={titleError ? styles.danger : null} maxLength='30' name='title' placeholder='Wpisz tytuł oferty ...'  value={title} onChange={this.handleChange} required/>
              <label htmlFor="title">Tytuł <p>Max znaków - {title.length}/30</p></label>
              {titleError !== '' ? <div className={styles.error}>{titleError}</div> : null}
           </div>
           <div className={styles.input}>
            <input autoComplete="off" type="number" min="0" className={priceError ? styles.danger : null} id='price' name='price' placeholder='Wpisz cenę ...' value={price} onChange={this.handleChange} required/>
            <label htmlFor="price">Cena</label>
            {priceError !== '' ? <div className={styles.error}>{priceError}</div> : null}
           </div>
           <div className={styles.input}>
            <input autoComplete="off" type="text" id='photo' className={photoError ? styles.danger : null} name='photo' placeholder='Wprowadź link do zdjęcia ...' value={photo} onChange={this.handleChange} required/>
              <label htmlFor="photo">Zdjęcie</label>
              { photo && photoError === '' ? <div className={styles.img}><img onError={this.badImg} src={photo} alt='Preview'/></div> : null}
              {photoError !== '' ? <div className={styles.error}>{photoError}</div> : null}
           </div>
           <div className={styles.input}>
            <textarea autoComplete="off" id='text' name='text'  className={textError ? styles.danger : null} maxLength='1000' placeholder='Wpisz treść oferty ...' value={text} onChange={this.handleChange} required/>
            <label htmlFor="text" >Opis <p>Max znaków - {text.length}/1000</p></label>
            {textError !== '' ? <div className={styles.error}>{textError}</div> : null}
           </div>
           <input type="submit" onClick={this.handleSubmit}/>
           {this.props.error !== '' ? <div className={styles.error}>{this.props.error}</div> : null}
         </form>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  loading: state.post.isLoading,
  error: state.post.error,
})

const mapDispatchToProps = dispatch => ({
  editOffer: (newOffer) => dispatch(editOffer(newOffer)),
  addedToFalse : () => dispatch(addedToFalse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OfferEdit)
