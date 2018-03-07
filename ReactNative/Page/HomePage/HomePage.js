
import React, { Component } from 'react';
import { View, Text, ListView,WebView} from 'react-native';

export class HomePage extends Component {
  static navigationOptions = {
    tabBarLabel: '社区'
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        '做人，要像一杯水，无色则纯。只要心里清澈，世事皆易，无味则淡；只要心里明了，万物皆空，无欲则刚；只要心里释然，了然清明。一切皆无。',
        '水，本清澈，无念；人，本善良，无为；心，本质洁，无心。心似莲花不染尘，意如止水静无波。温和岁月，努力做一个清澈的人，一个善良的人，一个坦坦荡荡的人。',
        '该静时静，该动时动，落笔款款，书两三行文字，寄于清风明月。但求心如明镜，只照当下，风流时就是少年，禅坐时就是老僧。',
        '如果说人生是一首优美的乐曲，那痛苦是其中一个不可缺少的音符；如果说人生是一望无际的大海，那挫折则是一个骤然翻起的浪花。淡定看人生，宁静做自我。生命中遇到的所有人和事，都不是能以我们的意志为转移的。愿意也好，抗拒也罢，该来的都会来，该失的终会失，没有选择，也无法逃避。我们能做的就是面对、接受，处理、放下。',
        '人生就像天平，总是一边给予，一边接受；一边付出，一边得到；一边耕耘，一边收获；一边物质，一边精神；一边自己，一边他人。上帝也很为难，他不可能把所有的好事都让给你，也不可能把所有的不幸都塞给你。唯有看淡得失，才能找到生命的最佳平衡状态。',
        '人生没有如果，命运不相信假设。因为有了因为，所以有了所以，既然已成既然，何必再说何必？人生充满变数，心态如何，直接影响到人生的状态，忘记你所失去的，珍惜你所拥有的，未来的命运会怎样，全在于今天的努力。',
        '不管是怎样的人生，只要自己尽了最大的努力，就该无怨无悔，无论悲喜，不管结果，都是生命写就的旋律，且用回眸一笑，温柔所有的过往，那些最真的，依然是曾有的那段情；最美的，依然是相伴走过的那一程。',
        '人活这一世，真正重要的不是生命里的岁月，而是岁月中的生活。放下烦忧，心似花开，红尘漫漫，安暖前行。春光美，心静花亦香，拥吻一簇桃红，轻嗅一脉香息，心自澄静犹如微波荡漾，无限温柔意，随草木萌生，伴清风悠然。',
        '独倚一窗春情，看一场细雨纷飞，情念，洒落一地诗香，兀自与岁月共清欢；轻折一支春景，勾勒一幅心暖花开，意恋，撒入灼灼美艳，静好与时光深回味。春来花开，是一种欣慰；春去花落，成一种感叹；日出若诗，日归似歌，素年光影，悠然静赏，闻彼岸花香，观变幻无常，牵一片闲云，引一抹欣喜，拾一片悠然，躺在文字中，翩翩起舞。'
      ])
    };
  }
  render() {
    return (
      // <View style={{flex: 1, paddingTop: 22}}>
        // <ListView
        //   dataSource={this.state.dataSource}
        //   renderRow={(rowData) => <Text>{rowData}</Text>}
        // />
      // </View>
        <WebView
            automaticallyAdjustContentInsets={false}
            style={{backgroundColor:'#f5f5f9'}}
            source={{uri: 'http://www.bilibili.tv'}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            scalesPageToFit={false}
        />

    );
  }
}
