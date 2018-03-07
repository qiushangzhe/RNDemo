import { HomePage } from './Page/HomePage/HomePage';
import { MinePage } from './Page/MinePage/MinePage';
import { TabNavigator , TabBarBottom } from 'react-navigation';

export default TabNavigator({
    Home: {
      screen: HomePage
    },
    Mine: { screen: MinePage },
},{
    tabBarComponent:TabBarBottom,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    backBehavior:'none',
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: false, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
    }
});
