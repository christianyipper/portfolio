import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Footer from '../Footer';

const StripesNation = () => {
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );
    const { ref: snap5, inView: inView5 } = useInView( { threshold: 0.5 } );

    useEffect( () => {
        document.body.classList.add("scroll-hide");
    
        return () => {
        document.body.classList.remove("scroll-hide");
        };
    }, 
    [] );
    
    return (
        <main className="artifact">
            <section className="scroll-wrap">
                <div className="scroll-section" ref={ snap1 }></div>
                <div className="scroll-section" ref={ snap2 }></div>
                <div className="scroll-section" ref={ snap3 }></div>
                <div className="scroll-section" ref={ snap4 }></div>
                <div className="footer-section" ref={ snap5 }>
                    <Footer />
                </div>
            </section>
            <section className="artifact-section">
                <div className="artifact-wrap">
                    <div className="artifact-heading-wrap heading-col">
                        <h1 className={ `artifact-heading-float ${ inView1 ? `blur-in` : `blur-out` }` }>
                            <span text-glow="S">S</span>
                            <span text-glow="t">t</span>
                            <span text-glow="r">r</span>
                            <span text-glow="i">i</span>
                            <span text-glow="p">p</span>
                            <span text-glow="e">e</span>
                            <span text-glow="s">s</span>
                            <span className="space" text-glow="N">N</span>
                            <span text-glow="a">a</span>
                            <span text-glow="t">t</span>
                            <span text-glow="i">i</span>
                            <span text-glow="o">o</span>
                            <span text-glow="n">n</span>
                        </h1>
                        <h1 className={ `artifact-heading-shimmer ${ inView1 ? `blur-in` : `blur-out` }` } text-shimmer="Brand Book">Brand Book</h1>
                    </div>
                    <div className="artifact-img-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7438 2122">
                            <g>
                                <g>
                                    <polygon className="icon-white" points="1589.3 929 1514.55 1228 985.83 699.3 730.21 1721.71 399.84 1721.71 730.21 400.29 1060.58 400.29 1589.3 929"/>
                                    <polygon className="icon-white" points="2154.02 400.29 1823.65 1721.71 1493.28 1721.71 964.56 1193 1039.31 894 1568.04 1422.7 1823.65 400.29 2154.02 400.29"/>
                                    <polygon className="sn-red" points="979.3 1721.69 861.8 1604.2 936.56 1305.2 1353.07 1721.69 979.3 1721.69"/>
                                    <polygon className="sn-red" points="1574.48 400.29 1691.98 517.78 1617.22 816.79 1200.71 400.29 1574.48 400.29"/>
                                </g>
                                <g>
                                    <polygon className="icon-white" points="6894.64 974.24 6707.87 1721.4 6372.02 1721.4 6434.7 1470.7 6166.08 1202.08 6036.17 1721.71 5700.32 1721.71 5887.11 974.54 6222.95 974.54 6491.57 1243.17 6558.81 974.24 6894.64 974.24"/>
                                    <path className="icon-white" d="M4774.19,974.54l-186.79,747.17h1009.67l186.77-747.17h-1009.65ZM5302.44,1556.85h-337.97l104.34-417.45h337.99l-104.36,417.45Z"/>
                                    <polygon className="icon-white" points="4148.46 1721.4 4484.31 1721.4 4671.08 974.24 4335.25 974.24 4148.46 1721.4"/>
                                    <polygon className="icon-white" points="4231.94 974.24 4190.8 1139.29 3854.94 1139.29 3751.68 1551.9 3751.62 1551.9 3709.21 1721.55 3373.36 1721.55 3518.92 1139.29 3183.27 1139.29 3224.41 974.24 4231.94 974.24"/>
                                    <path className="icon-white" d="M2113.86,974.24l-144.42,577.66h.17l-42.45,169.81h335.85l73.39-293.6h335.51l-73.4,293.6h335.85l42.44-169.81h.17l144.4-577.66h-1007.51ZM2713.34,1263.07h-335.85l31.07-123.78h335.84l-31.06,123.78Z"/>
                                </g>
                                <g>
                                    <polygon className="sn-red" points="2461.81 514.86 2443.17 589.34 2909.56 589.34 2885.94 683.87 2885.75 684.6 2862.69 778.38 2834.06 892.93 2134.23 892.93 2162.81 778.38 2629.42 778.38 2648.06 703.9 2181.23 703.9 2209.89 589.34 2228.53 514.86 2257.19 400.29 2956.96 400.29 2928.32 514.86 2461.81 514.86"/>
                                    <polygon className="sn-red" points="3715.08 400.29 3686.44 514.86 3453.24 514.86 3358.66 892.93 3125.38 892.93 3219.96 514.86 2986.61 514.86 3015.19 400.29 3715.08 400.29"/>
                                    <path className="sn-red" d="M3773.24,400.29h0s-.01.01-.01.01l-123.24,492.63h233.28l47.29-189.04,2.35-9.39,8.68,9.39,174.77,189.04h269.43l-173.44-189.04h184.33l.06-.25.48.25,47.29-189.04,28.64-114.57h-699.89ZM4192.59,589.33h-233.36l18.63-74.47h233.36l-18.63,74.47Z"/>
                                    <path className="sn-red" d="M4641.43,892.94h-233.28l123.24-492.64h233.28l-123.24,492.64Z"/>
                                    <path className="sn-red" d="M4822.66,400.29h0s-.05.01-.05.01l-47.29,189.04h-.01l-2.04,8.19-73.9,295.4h233.28l47.29-189.04h466.63v-.02s.05.02.05.02l47.3-189.04,28.64-114.57h-699.89ZM5027.23,514.86h233.4l-18.64,74.48h-233.39l18.63-74.48Z"/>
                                    <polygon className="sn-red" points="5785.26 514.86 5766.62 589.34 6233.37 589.34 6204.74 703.9 5737.96 703.9 5719.33 778.38 6185.86 778.38 6157.23 892.93 5457.39 892.93 5486.05 778.38 5580.64 400.29 6280.67 400.29 6252.03 514.86 5785.26 514.86"/>
                                    <polygon className="sn-red" points="6543.01 514.86 6524.37 589.35 6990.76 589.35 6967.14 683.87 6966.95 684.6 6943.89 778.38 6915.26 892.94 6215.43 892.94 6244 778.38 6710.62 778.38 6729.26 703.9 6262.43 703.9 6291.09 589.35 6309.73 514.86 6338.39 400.3 7038.16 400.3 7009.52 514.86 6543.01 514.86"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default StripesNation