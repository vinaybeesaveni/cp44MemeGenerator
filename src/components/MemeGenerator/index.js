import {Component} from 'react'
import {
  MainContainer,
  MainHeading,
  Label,
  Input,
  InputContainer,
  Select,
  Option,
  Button,
  MemeContainer,
  Text,
  Form,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    showMeme: false,
  }

  onUrlChange = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTopTextChange = event => {
    this.setState({topText: event.target.value})
  }

  onBottomTextChange = event => {
    this.setState({bottomText: event.target.value})
  }

  onFontSizeChange = event => {
    this.setState({fontSize: event.target.value})
  }

  showMeme = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  generateMeme = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <MemeContainer imageUrl={imageUrl} data-testid="meme">
        <Text fontSize={fontSize}>{topText}</Text>
        <Text fontSize={fontSize}>{bottomText}</Text>
      </MemeContainer>
    )
  }

  render() {
    const {showMeme, imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <MainContainer>
        <MainHeading>Meme Generator</MainHeading>
        <Form onSubmit={this.showMeme}>
          {showMeme && this.generateMeme()}
          <div>
            <InputContainer>
              <Label htmlFor="image-url">Image Url</Label>
              <Input
                id="image-url"
                type="text"
                placeholder="Enter the Image URL"
                onChange={this.onUrlChange}
                value={imageUrl}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="top-text">Top Text</Label>
              <Input
                id="top-text"
                type="text"
                placeholder="Enter the Top Text"
                onChange={this.onTopTextChange}
                value={topText}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="bottom-text">Bottom Text</Label>
              <Input
                id="bottom-text"
                type="text"
                placeholder="Enter the Bottom Text"
                value={bottomText}
                onChange={this.onBottomTextChange}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="font-size">Font Size</Label>
              <Select
                id="font-size"
                type="select"
                placeholder="Enter the Bottom Text"
                onChange={this.onFontSizeChange}
                value={fontSize}
              >
                {fontSizesOptionsList.map(each => (
                  <Option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </Option>
                ))}
              </Select>
            </InputContainer>
            <Button type="submit">Generate</Button>
          </div>
        </Form>
      </MainContainer>
    )
  }
}
export default MemeGenerator
