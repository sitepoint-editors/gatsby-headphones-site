import React from 'react'
import Components from '../components/Components'
import SEO from '../layout/seo'

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)
    return { story }
  }

  constructor(props) {
    super(props)

    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    const { name, content } = this.state.story

    return (
      <div>
        <SEO title={name} />
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
      </div>
    )
  }
}

export default StoryblokEntry
