import React, { useState } from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';

export default function(){

    const [atualizando, setAtualizando] = useState(false)

    const aoAtualizar = () => {

        // toda a rotina de atualização 
        
        setAtualizando(true);
        setTimeout(() => {setAtualizando(false);}, 2000)
    }

    return(
        <View style={{flex: 1}}>
            <ScrollView style={{backgroundColor:'#333'}}
            refreshControl={
                <RefreshControl
                    refreshing={atualizando}
                    onRefresh={aoAtualizar}
                />

                
            }
            
            >
                <Text style={{color:'#eee'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare, augue a commodo feugiat, velit libero feugiat ante, eget tempor odio neque vitae tortor. Donec eget nunc eget mauris mattis commodo nec a lectus. Maecenas efficitur sem ut libero interdum sagittis. Maecenas condimentum nulla semper risus molestie congue. Proin elementum massa quis bibendum fermentum. Suspendisse cursus eleifend arcu, nec molestie ante fermentum eu. Morbi tortor risus, maximus a gravida quis, suscipit ultricies ipsum. Nunc ac erat in lorem dictum interdum sollicitudin eget velit. Integer consectetur mi ut metus laoreet sodales nec sit amet ante. Donec maximus metus id ipsum imperdiet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare, augue a commodo feugiat, velit libero feugiat ante, eget tempor odio neque vitae tortor. Donec eget nunc eget mauris mattis commodo nec a lectus. Maecenas efficitur sem ut libero interdum sagittis. Maecenas condimentum nulla semper risus molestie congue. Proin elementum massa quis bibendum fermentum. Suspendisse cursus eleifend arcu, nec molestie ante fermentum eu. Morbi tortor risus, maximus a gravida quis, suscipit ultricies ipsum. Nunc ac erat in lorem dictum interdum sollicitudin eget velit. Integer consectetur mi ut metus laoreet sodales nec sit amet ante. Donec maximus metus id ipsum imperdiet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare, augue a commodo feugiat, velit libero feugiat ante, eget tempor odio neque vitae tortor. Donec eget nunc eget mauris mattis commodo nec a lectus. Maecenas efficitur sem ut libero interdum sagittis. Maecenas condimentum nulla semper risus molestie congue. Proin elementum massa quis bibendum fermentum. Suspendisse cursus eleifend arcu, nec molestie ante fermentum eu. Morbi tortor risus, maximus a gravida quis, suscipit ultricies ipsum. Nunc ac erat in lorem dictum interdum sollicitudin eget velit. Integer consectetur mi ut metus laoreet sodales nec sit amet ante. Donec maximus metus id ipsum imperdiet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare, augue a commodo feugiat, velit libero feugiat ante, eget tempor odio neque vitae tortor. Donec eget nunc eget mauris mattis commodo nec a lectus. Maecenas efficitur sem ut libero interdum sagittis. Maecenas condimentum nulla semper risus molestie congue. Proin elementum massa quis bibendum fermentum. Suspendisse cursus eleifend arcu, nec molestie ante fermentum eu. Morbi tortor risus, maximus a gravida quis, suscipit ultricies ipsum. Nunc ac erat in lorem dictum interdum sollicitudin eget velit. Integer consectetur mi ut metus laoreet sodales nec sit amet ante. Donec maximus metus id ipsum imperdiet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare, augue a commodo feugiat, velit libero feugiat ante, eget tempor odio neque vitae tortor. Donec eget nunc eget mauris mattis commodo nec a lectus. Maecenas efficitur sem ut libero interdum sagittis. Maecenas condimentum nulla semper risus molestie congue. Proin elementum massa quis bibendum fermentum. Suspendisse cursus eleifend arcu, nec molestie ante fermentum eu. Morbi tortor risus, maximus a gravida quis, suscipit ultricies ipsum. Nunc ac erat in lorem dictum interdum sollicitudin eget velit. Integer consectetur mi ut metus laoreet sodales nec sit amet ante. Donec maximus metus id ipsum imperdiet.
                </Text>
            </ScrollView>
        </View>
    )
}