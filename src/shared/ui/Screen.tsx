import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";




export default function Screen({ children }: PropsWithChildren) {

    return (
        <SafeAreaView
            edges={["top"]}
            style={{
                flex: 1
            }}
        >
            {children}
        </SafeAreaView>
    )
}