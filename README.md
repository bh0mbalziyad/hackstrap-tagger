This project conatains two react components.

### SubstringTagger
This component takes in the tag data with a prop with the following structure
```javascript
{
  text: 'The complete text',
  nerTags:[
    {
      subString: 'the subtring to look for',
      tag: 'The tag for the substring',
    },
  ],
}
```
### Tag
This component is what is rendered by the SubstringTagger component. It takes care of the tag's styling. It takes in two props:
- string of type String
- tag of type String
