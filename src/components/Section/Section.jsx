import { PropTypes } from 'prop-types';
import { SectionPart, SectionHeader } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
    return (
        <SectionPart>
            <SectionHeader>{title}</SectionHeader>
            { children }
        </SectionPart>
    )
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};