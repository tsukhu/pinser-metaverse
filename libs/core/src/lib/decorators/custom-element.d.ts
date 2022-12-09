import { MetaElement } from '../classes/meta-element';
import { MetaProvider } from '../classes/meta-provider';
import '../components/networked-element';
export declare const customElement: <P extends typeof MetaProvider>(elementName: string, _options?: {
    networked?: boolean | undefined;
    providers?: P[] | undefined;
} | undefined) => <E extends typeof MetaElement>(ElementClass: E) => void;
