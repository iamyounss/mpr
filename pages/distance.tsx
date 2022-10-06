import DistanceTracker from '../components/base/DistanceTracker';

export default function AuthDistanceTracker(): JSX.Element {
        /**
         * need SSR
         * at each request from client to google api
         * rehydrate the state inside input
         */
        return <DistanceTracker />
}