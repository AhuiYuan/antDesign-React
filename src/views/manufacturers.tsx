
import {Component} from "react";

export function getImageUrl(person: { imageId: string; }, size = 's') {
    return (
        'https://i.imgur.com/' + person.imageId + size + '.jpg'
    );
}
class Profile extends Component<{ person: any, size: number }> {
    render() {
        let {person, size} = this.props;
        const imageSrc = getImageUrl(person)
        return (
            <section className="profile">
                <h2>{person.name}</h2>
                <img
                    className="avatar"
                    src={imageSrc}
                    alt={person.name}
                    width={size}
                    height={size}
                />
                <ul>
                    <li>
                        <b>Profession:</b> {person.profession}
                    </li>
                    <li>
                        <b>Awards: {person.awards.length} </b>
                        ({person.awards.join(', ')})
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {person.discovery}
                    </li>
                </ul>
            </section>
        );
    }
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile person={{
                imageId: 'szV5sdG',
                name: 'Maria Skłodowska-Curie',
                profession: 'physicist and chemist',
                discovery: 'polonium (chemical element)',
                awards: [
                    'Nobel Prize in Physics',
                    'Nobel Prize in Chemistry',
                    'Davy Medal',
                    'Matteucci Medal'
                ],
            }}  size={100}/>
            <Profile person={{
                imageId: 'YfeOqp2',
                name: 'Katsuko Saruhashi',
                profession: 'geochemist',
                discovery: 'a method for measuring carbon dioxide in seawater',
                awards: [
                    'Miyake Prize for geochemistry',
                    'Tanaka Prize'
                ],
            }}  size={70}/>
        </div>
    );
}
