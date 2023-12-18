import Banner from '../components/Banner';
import aboutImage from '../style/assets/img/about-image.png';
import Dropdown from '../components/Dropdown';

function About() {

  const aboutArr = [{
    title: 'Fiabilité',
    text : `Les annonces postées sur Kasa garantissent une fiabilité totale.
    Les photos sont conformes aux logements, et toutes les informations sont
   régulièrement vérifiées par nos équipes.`
  },
  {
    title:'Respect',
    text : `La bienveillance fait partie des valeurs fondatrices de Kasa.
    Tout comportement discriminatoire ou de
   perturbation du voisinage entraînera une exclusion de notre plateforme.`
  },
  {
    title:'Service',
    text : `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
    N'hésitez pas à nous contacter si vous avez la moindre question.`
  },
  {
    title:'Sécurité',
    text : `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
    également des ateliers sur la sécurité domestique pour nos hôtes.`
  }]

  return (
    <main className='main'>
      <Banner image={aboutImage} />
      <div className='about-dropdown'>
      {aboutArr.map((item, index) => (
          <Dropdown key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </main>
  );
}

export default About;
