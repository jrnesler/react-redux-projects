import bluependant from '../images/thumb_blue_pendant.jpg';
import greenpendant from '../images/thumb_green_pendant.jpg';
import pinkpendant from '../images/thumb_pink_pendant.jpg';
import whitependant from '../images/thumb_white_pendant.jpg';
import blue from '../images/blue_pendant.jpg';
import green from '../images/green_pendant.jpg';
import pink from '../images/pink_pendant.jpg';
import white from '../images/white_pendant.jpg';
import wire1Thumb from '../images/thumb_wire_wrap1.jpg';
import wire2Thumb from '../images/thumb_wire_wrap2.jpg';
import wire3Thumb from '../images/thumb_wire_wrap3.jpg';
import wire4Thumb from '../images/thumb_wire_wrap4.jpg';
import wireWrap1 from '../images/wire_wrap1.jpg';
import wireWrap2 from '../images/wire_wrap2.jpg';
import wireWrap3 from '../images/wire_wrap3.jpg';
import wireWrap4 from '../images/wire_wrap4.jpg';
import thumbDice1 from '../images/thumb_dice_bloodmagic.jpg';
import thumbDice2 from '../images/thumb_dice_boreal_wire.jpg';
import thumbDice3 from '../images/thumb_dice_celtic.jpg';
import thumbDice4 from '../images/thumb_dice_orange.jpg';
import thumbDice5 from '../images/thumb_dice_purple_wire.jpg';
import thumbDice6 from '../images/thumb_dice_watermagic.jpg';
import thumbDice7 from '../images/thumb_dice_white_wire.jpg';
import dice1 from '../images/dice_bloodmagic.jpg';
import dice2 from '../images/dice_boreal_wire.jpg';
import dice3 from '../images/dice_celtic.jpg';
import dice4 from '../images/dice_orange.jpg';
import dice5 from '../images/dice_purple_wire.jpg';
import dice6 from '../images/dice_watermagic.jpg';
import dice7 from '../images/dice_white_wire.jpg';


const GALLERIES =[
    {
        name: 'Beaded Jewelry',
        id: 'beadwork',
        description: 'placeholder',
        resources:[
            {
                id: 1,
                thumbnail: bluependant,
                url: blue,
                title: 'Blue Swarovski Pendant'
            },
            {
                id: 2,
                thumbnail: greenpendant,
                url:green,
                title: 'Green Swarovski Pendant'
            },
            {
                id: 3,
                thumbnail: pinkpendant,
                url:pink,
                title: 'Pink Glass Cabochon Pendant'
            },
            {
                id: 4,
                thumbnail: whitependant,
                url:white,
                title: 'White Swarovski Pendant'
            }
        ]
    },
    {
        name: 'Wire Jewelry',
        id: 'wirewrapped',
        description: 'placeholder #2',
        resources:[
            {
                id: 'wire1',
                thumbnail: wire1Thumb,
                url: wireWrap1,
                title: 'placholder 1'
            },
            {
                id: 'wire2',
                thumbnail: wire2Thumb,
                url:wireWrap2,
                title: 'placholder 1'
            },
            {
                id: 'wire3',
                thumbnail: wire3Thumb,
                url:wireWrap3,
                title: 'placholder 1'
            },
            {
                id: 'wire4',
                thumbnail: wire4Thumb,
                url:wireWrap4,
                title: 'placholder 1'
            }
        ]
    },
    {
        name: 'Dice Jewelry',
        id: 'dice',
        description: 'placeholder #3',
        resources:[
            {
                id: 'dice1',
                thumbnail: thumbDice1,
                url: dice1,
                title: 'Blood Magic'
            },
            {
                id: 'dice2',
                thumbnail: thumbDice2,
                url:dice2,
                title: 'Boreal Wire'
            },
            {
                id: 'dice3',
                thumbnail: thumbDice3,
                url:dice3,
                title: 'Celtic'
            },
            {
                id: 'dice4',
                thumbnail: thumbDice4,
                url:dice4,
                title: 'Fall'
            },
            {
                id: 'dice5',
                thumbnail: thumbDice5,
                url:dice5,
                title: 'Purple Nebula'
            },
            {
                id: 'dice6',
                thumbnail: thumbDice6,
                url:dice6,
                title: 'Water Magic'
            },
            {
                id: 'dice7',
                thumbnail: thumbDice7,
                url:dice7,
                title: 'Snow'
            }
        ]
    }
];

export default GALLERIES;