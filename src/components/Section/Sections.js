import PropTypes from 'prop-types';
import { SectionStyled } from './SectionStyled';


 const Section =({ title, children }) =>{
         return(
        <SectionStyled>
            <h2> {title} </h2>
            {children}
        </SectionStyled>
    )
}


Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired,
}

export default Section;