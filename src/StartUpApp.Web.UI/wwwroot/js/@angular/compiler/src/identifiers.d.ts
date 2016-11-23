import { CompileIdentifierMetadata, CompileTokenMetadata } from './compile_metadata';
export interface IdentifierSpec {
    name: string;
    moduleUrl: string;
    runtime: any;
}
export declare class Identifiers {
    static ANALYZE_FOR_ENTRY_COMPONENTS: IdentifierSpec;
    static ViewUtils: IdentifierSpec;
    static AppView: IdentifierSpec;
    static DebugAppView: IdentifierSpec;
    static AppElement: IdentifierSpec;
    static ElementRef: IdentifierSpec;
    static ViewContainerRef: IdentifierSpec;
    static ChangeDetectorRef: IdentifierSpec;
    static RenderComponentType: IdentifierSpec;
    static QueryList: IdentifierSpec;
    static TemplateRef: IdentifierSpec;
    static TemplateRef_: IdentifierSpec;
    static CodegenComponentFactoryResolver: IdentifierSpec;
    static ComponentFactoryResolver: IdentifierSpec;
    static ComponentFactory: IdentifierSpec;
    static NgModuleFactory: IdentifierSpec;
    static NgModuleInjector: IdentifierSpec;
    static RegisterModuleFactoryFn: IdentifierSpec;
    static ValueUnwrapper: IdentifierSpec;
    static Injector: IdentifierSpec;
    static ViewEncapsulation: IdentifierSpec;
    static ViewType: IdentifierSpec;
    static ChangeDetectionStrategy: IdentifierSpec;
    static StaticNodeDebugInfo: IdentifierSpec;
    static DebugContext: IdentifierSpec;
    static Renderer: IdentifierSpec;
    static SimpleChange: IdentifierSpec;
    static UNINITIALIZED: IdentifierSpec;
    static ChangeDetectorStatus: IdentifierSpec;
    static checkBinding: IdentifierSpec;
    static flattenNestedViewRenderNodes: IdentifierSpec;
    static devModeEqual: IdentifierSpec;
    static interpolate: IdentifierSpec;
    static castByValue: IdentifierSpec;
    static EMPTY_ARRAY: IdentifierSpec;
    static EMPTY_MAP: IdentifierSpec;
    static createRenderElement: IdentifierSpec;
    static selectOrCreateRenderHostElement: IdentifierSpec;
    static pureProxies: IdentifierSpec[];
    static SecurityContext: IdentifierSpec;
    static AnimationKeyframe: IdentifierSpec;
    static AnimationStyles: IdentifierSpec;
    static NoOpAnimationPlayer: IdentifierSpec;
    static AnimationGroupPlayer: IdentifierSpec;
    static AnimationSequencePlayer: IdentifierSpec;
    static prepareFinalAnimationStyles: IdentifierSpec;
    static balanceAnimationKeyframes: IdentifierSpec;
    static clearStyles: IdentifierSpec;
    static renderStyles: IdentifierSpec;
    static collectAndResolveStyles: IdentifierSpec;
    static LOCALE_ID: IdentifierSpec;
    static TRANSLATIONS_FORMAT: IdentifierSpec;
    static setBindingDebugInfo: IdentifierSpec;
    static setBindingDebugInfoForChanges: IdentifierSpec;
    static AnimationTransition: IdentifierSpec;
    static InlineArray: IdentifierSpec;
    static inlineArrays: IdentifierSpec[];
    static EMPTY_INLINE_ARRAY: IdentifierSpec;
    static InlineArrayDynamic: IdentifierSpec;
}
export declare function assetUrl(pkg: string, path?: string, type?: string): string;
export declare function resolveIdentifier(identifier: IdentifierSpec): CompileIdentifierMetadata;
export declare function identifierToken(identifier: CompileIdentifierMetadata): CompileTokenMetadata;
export declare function resolveIdentifierToken(identifier: IdentifierSpec): CompileTokenMetadata;
export declare function resolveEnumIdentifier(enumType: CompileIdentifierMetadata, name: string): CompileIdentifierMetadata;
