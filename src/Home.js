import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src={require("./images/amazon_background.png")}
          alt="Amazon Background"
        />
        <div className="home_row">
          {/* product */}
          <Product 
          title = 'The Lean Startup' 
          price = {29.99} 
          image = 'https://d1b14unh5d6w7g.cloudfront.net/0307887898.01.S001.LXXXXXXX.jpg?Expires=1682626651&Signature=OYpAb4fS~nrw64edKajPXD-O4PsDF8MBI3rsL8WnDT61IxgWsH8-pPHFXTLV-N3SScvEHwYVL0oO98ZpvHTSvlU6~gpAGlCR4a8E-N-MdFjKmV7Fbo69e4Vlbr0Zd-0-c9v3yWtymEO8M8V0faWqxa2ZbSEUIfgiZtbCp8lb~dQ_&Key-Pair-Id=APKAIUO27P366FGALUMQ'
          rating = {5}/>
          {/* product */}
          <Product 
          title = 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater' 
          price = {29.99} 
          image = 'https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SL1200_.jpg'
          rating = {5}/>
        </div>
        <div className="home_row">
          {/* product */}
          <Product 
          title = 'Apple Watch Series 8' 
          price = {199.99} 
          image = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTH3_VW_34FR+watch-41-alum-midnight-nc-8s_VW_34FR_WF_CO_GEO_CA+watch-face-41-bhm-sport-loop_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1672773910529%2C1661971864171%2C1674108542685'
          rating = {5}/>
          <Product 
          title = 'Amazon Echo (3rd generation) | Smart speaker with Alexa' 
          price = {98.99} 
          image = 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/130/13023/13023977.jpg'
          rating = {5}/>
          <Product 
          title = 'New Apple iPad Pro' 
          price = {29.99} 
          image = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-11-wifi-silver-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1674663704665'
          rating = {5}/>
          {/* product */}
          {/* product */}
        </div>
        <div className="home_row">
          {/* product */}
          <Product 
          title = 'Samsung LC4383y142345 49` Curved LED Gaming Monitor' 
          price = {1099.99} 
          image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUZGBgYGBgSGhgYHBwYGBoYGBgaHBgYGBgcIy4lHB4rHxgZJjgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHhISHzQlISs0NDQ0NDQ0NjQ0MTQ0NDQ0ND80NDQ0NDQ0NDQ0NTQ0NDQ0MTQ0MTY/NDQ0NDQ0PTQxNP/AABEIAJABXwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYIAQf/xABLEAABAgIFBAsMCAYCAwAAAAABAAIDEQQFEiExBkFRcQcUIlRhgZGSobHRFhcyQlJTcoKTssHSExUjQ0Si4fAkMzRiwvFj4nSjs//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAAMAAgICAwABBQAAAAAAAAABAgMREiExUQQTQWEUIjLB8f/aAAwDAQACEQMRAD8AxmVuUlLbTIwbSHgBwkA64blpuCqu62m75f0di8yx/rY3pN9xqpFuktEF+zLKnjClROUHrCX3bVhvqJ0dizyE4oGkZl5WA/FPOuXYlDL+sd9xOjsWZQnFA1bdkWsR+Jeda974tY75d09qyaE4oGvbsk1iPvydc+1K75dY+f6+1Y5CcEDaN2T6xH3wOtv6pffSrHzreb+qxACUGqyheiNm176NY+dbzf1ShspVl51vMCxYYlthqyxz6IdaNs3ZSrLzjOYEsbJ9ZH71nMCxgYnGtVlin0Z1kZsRsl1l55nManGbJFYn75vMasg2CZKRAhadK1nBP6jJ5X7NazZDrHzzfZs7E8NkGsZT+mZ7NnYszChqTRYVo2ThfxSE1svjY/Rjfyanwy/hbIFYm4xmY+bZhyKbAy1rAm+M3g+ybMnkWdbRxIubgD1zl0gcqkNhEBrhO9pI4nOb8FZfGxejlv5eV9p6L5mWVPJl9O32bOxETLGsAJikN9mzsVWIZa9wlgXDiaDPqREE2z/czm6Crf02H0c7+bnT8ks5a1gTdSB7NnYmomW9YAyFIHs2diiNhgAzx0KC9ov61D+Li9GsfNyt+S2dlzWA/EDmM7Ew/L+sRhHHMZ2KndDTT4VypXxsf4jeflX+ss4myTWY++Z7NqixNk+s/Pt4mM7FT0mHiq58Jc1YZT8Hbjzul2aI7JtZb4/K3sR3zqy3x+RqyjoKQYSyeJHQqRrTsm1nvj8rexNO2R6yP4l3EAOpZMhJVXCROzWd8Wst8uSX7IVZH8U8apBZZCjiiTSd3lY77i84pLsuKwP4yNzys6hOKBf92lYb7jc8pByxp++43PKo0JxQLo5V00/iovOKQcp6ZvmLzyqhCcUC0flBSjjSInOI6lZ5O1/ShFLhSIkw0kG0c5Az8BKzCtMn/wCY70D7zUaWgPZXn+Mja2+41UquMrD/ABcXWz3GqnSfAPEIQrAEIQgBCEIAQhegIgKalsC8a1PsYtZRnVaPWtTrGBDWJ9kLjWkyY1R4xslMbBaTcZZ55tS8hwxh/tSIcLMuiIMLoW+FmF8kv6OXWn4VEcRcNzjPMnocBx8CcxiM8tI4FtxOV5e9J7I8OFaBIxaCZcAvJ4sTwX5irKjVe98nwxuhjoDwLTdYe0TGkgqfU1U2yHglkt1ub5lt9uHpAvtMzZtA0D4jITS1oDXBswxuEvC3HlSlbYc8nN0KjZFZFvU9sq4NSBofebLmuLQMwkI0MTzncPZ6qmmrGXNkbnGHjgDHZLik9VkevTeGABrm22aGuDrRYOAH6UDgeE2Kxdujpaw+s36P4smimmYU9ef0ttoscXmZbaaJm4yER74hdxQ2uUePVTpNlKz4biPFLhaMxjJrLM+F3Cm4NZeFLQyHLMQGtacdLWFvrlWMCnAlzrQF4aH4Ne6Zc4nQ0vm5x8ljG51L5SZrizPubMkyk0DPmBwB4T2ph1HvJWsp9WiICBNrmmbrvDJEybOeI4CYbO4G+Rms89siSBJrdzfffoLvGdq6ArRaZSpc+CtpEFRXMVw8TbOQmosajk3n/au0IyfjKSLBUGJBV3HhSVdEhrnuUd+LIVz4KjvaFPiNUOI1YUtHbFbIURqZIUiI1MuCxpHVLG0IQsjQEIQgBCEIAQhCA9VlUJ+0PoH3mqtVlUR+0PonrCrXgC8qDOlRPU9xqqlZ5SH+Jiep7jVWJPgHiEIVgCEIQAhCEAL0LxLYplbZDHobDoUqEw6EiDJWVHaF1RGzly3oSyj6WqRBg33KUxk8L+BPQwM4lqXTONHDeZiWUcjEA9Km0ajBzc9xSmwzKYwuxw6lMgC7hPJ0LaZ0cOTK9CYkMBspXA8qXQaC17m2XFpmMZgaZteBuSOEEXYqZBguIxv1y6SripaK4WnWZmVkOaCPCN+6h2gbp4tKrkekZ4bbbJFIP0bJ2bUhaAbc4gePJvjTvtsn/cCsdWFJLjO1aAJcx0rLm3zLSBdKd9107xKZC0letmbIbcDObHNBB0lgOPDZaeFULqHaOu+c8/DpKrjna2a/aofZVWQbs858Cs4FFxDsbsClMooEp4hW1X0W1ccMfjctdcUYZc7rpFJFgluBxUqhWgQZiY8GeAOmRxVrEogtEEXD9hRHwLJwl0ptMy+x6/kvKqiTAEyZG57iRNxM3Nb40ibzZm52cgKPlFQw6UW9ova5oE3NcNDQbLQcTMznPFQ4FKsbqU3DCZMuRsp8suBNR4z4lzjcLw0ANaNTRcFj9b57Rss646fZEDhol0nl/RJjtn+8yl0miFsp+SCmCLr1vPaOdvVFVFlmA4+xVscKxpDDOcioboZzhZ0tnfiaXZAiC7AKBGadCtYsI5gosSCc6wqWzux2kU8ZhUR4VtHaq6O1c1To78VbIyF6V4udnQCEIQAhCEAIQhAeqwqX+YfRPWFXqfU3hn0T1hVrwBVf/wA9/qe41VysK9/nv1M9xqr0nwDxCEKwBCEIAQhCAE9CCZTkMyV58kV4LOjsVxR2jgVDAjq0o9J4Qu3FSR52eKZdQ2KQyFLPyqqZSSnodIJznjC6VSPPrFZcNhzkp9HY0Z1QMpJFxnxXKbCiOs2gDLl41dM48uKteS+htGmWofqrOq6O05id203tdw5w8LMUasAJWhPWT8Cr+rX+FuWsmA4Taxky2+Yc4Ocbp4NKyy710yuDHxr+5bPa4htEi5oGaZcZ8QLnKHR6VCbLch1+ef7KfykbuSSGtaRaBcXWr9DTI/lCx7aRZuvxmDOSQ05Wzf6HVPX4byjijOnuXWsc8ug3I8FoDBcZzwxvvnnN8llodJlZvv0cCvKvpwlZMtAliZz/AEU1DXabZg3+NJfyizYxglaFo44nNic+jBQ6U6G7gvnNon8R1KqptMc5xM+DWqyNSZeMR++VSo122E3S4pLRpGVex33hbra0dbwtBVFXw2EWnWp/2tGHCHFZWo4zibjuZgTBsieiYLb+AvnwLQ1hGLWOkAXBtkA2S607ABsQNJuBwccFzZuX+OzrwTMPeuyxyjotGLbRdZcBcRLDRJYCNLxTMagD1pusqyeSGuaWkACRDmnmk3KpjUg4jpWuCHjnTeyvyF9uTaSX+ydHs4EmeiagxAM0uKSgxKQc5mVFi0k6eRXrIkXx4K9k6I8f7USMbrpKA+OU0+NxLCsqO2MDQmkPUCM5LjuUdxXNdHoY50htCELnZuCEIQAhCEAIQhAeqfUw+09U9YUBWFSD7T1T1hVrwAr/APqH+r7jVXqwr/8AqH+r7jVXpPgHiEIVgCEIQAhCEAL0LxCIDjXKRDilRAlBy1milTstYdLI4elPspjp3GSpxETzIi1Vv2YViXoum01xzkqTDpr5YuloVMyNoT8OIVvOR+zF4p/UjQ0GmkG/HTgRx5lcUOsBDeHF03NN8tyAM9p5BcdTcdKy1HiiVkiYnPGXSreiEjdNaQ6cg/EgnyOHhx0SWyfJHDlxTFbN1Fgh7bAAmRbZNsg0HGbZSbIm4um4kmQvCxVYUMscbUzI2bTri92eQxzjVMTxkriqaxa2UFxJLnXFl7mPdMCyTO1EMzN2Dc1+FtTYbHttPluW7iKy9t5lMYy3TrLTeXOtOMpLJPi9ES3L2v8ApgjFvvVhAjH951NpmTb2TkLTWNO6b4zy4NPIS4eoosWqYgtSady1l3pWJ+8t5paM8vGn10NilkEzzAnX2KJDDnvmBN0rUtIz2eG7DgKs21REcTZbMgscAcHNeBjxuYPWVrQanbDkXG0LTXQ5GTgXTLWE5ibJAOZ7NBM4vIiccytteSdk/DDWWsBcCfB8LwQ44NBzTBYf7Smq/poH2U5Fu7c2yHAEylahHASlu2GWOlKp9aiHLdScQSwtA3IMw59nAk4Phm4EEhZmPSLd1kGW6sTJlMzL6O832c5YcL5g5sF29s0iN7YzSnkDHc47lxcy/CQde3Ub1VvijhSIsW+YdMac+ojMojnaFeq9F5xPfYuJFmokaKiJEOdQosUrC6OvHjFviJl7006IkW1g2dUxoU9800V6SkqjZqloEIQqEghCEAIQhACEIQHqs6gH2vqHrCrFb5MNnGPonrCrXgDFf/1D9bfcaq9T69P279Y90KAk+AeIQhWAIQhACEIQAhCEAL1eLxV5aAoFLa5NL0FWVkNE2HEUtkUBVIcn4b1vNmNR+lxBfwqxNIIYADLhVAyKpzY1w1Lpi+jnvHya3+FjR6UGgy8JwLSdDTiBrz8F2crQ1fWz2OYxpBMwSD4JiGTWN4GsEuMO0hZBj5EX3qZBjWTMYyIHGJT5Jq6e/JTJiT6RvoFaQyHlpczc2W2SZFrR9Ewy0ziPdLSJqeKwaXtm4ScWm9ovG2ZC+XktAWAg0ohlkGRLgZ+jPrtdCkvrBwcyXiNHKHlw61Lxo89y96NT9as+jBLz4LWkt3NzgYUzok5sM8SpqxrubrhZZEbaMvDsvJ+kbM4FsRtpoEhdfiqN1Lve3xTabLjtD8wCYiUsEAOvDSXDjAn1BGpNseNrXWyTFpTjaY8zOIcPLl4Y9ISnpuzgKBFjmQE5Z+MSwTb4szOd37uTFIig/BQ30daxa70D6ROZOJx4eHWo7omsJtzk096xqi6nYuLHukb1CiPXkRyamsLo6YhICV4vETWXI00CEIVdkghCFIBCEIAQhCAEIQgPVe5HtnHPoO62qiWjyFE6SR/xu62qteAQK0or3xXua0kE43ZgB8FE+r4nkdI7V0NSNjKiPc59uO204ustcyyLRmQLTCZX5ymTsV0Xz0flZP3FmrJ0c/8A1fE8jpHajaL/ACekdq6AGxVRc8WOeNnyJ3vWULy4/Pb8inmyNHPW0X+T0hebRfo6Quh2bF1BGJjHW8fBoSu9fQPJi+0KjmydHO+0n6ByrzaT+DlXRvezq/zb/aP7V6NjSrvMuOuLE+Dk5saOcdpO4OVebTdwcq6S729Xb3PtInzJxmx1Vo/DA63xD/knNjRzRtQ6Qvdpu0hdMd76rd6t5z/mSxkFV284f5j8VGwcx7UOkI2odIXTvcHV284XIe1L7h6u3lA5gKjYOYdqHSEoUcjOOldO9xNX7ygcwL0ZF1ePwUD2bexWVtEaRzK2GeBOscRoXS/cdV+8oHs29i97jqv3lR/Zt7FdZ6X6VcJnNUOJLNPjTjKSZzInxrpHuOq/eVH9m3sR3HVfvKj+zb2Kf6i/Y4Sc6tp/9vT+iWynZ7P5r192ygyUoLaLSHMokBrmwYrmubDYC1wY4ggyuIK5+p7AwybPlJ61dfKyezN/Hh/hIiUvPZu9IdKivjEnoxSKMZ4rpVmR1AkP4KjYD7pnYq18i/ZpOOZXRzY6KSJJDnErpfuOq/eNG9kzsXncZV+8qP7NvYq/ffsnhJzMWlIdCJzhdN9xdX7ygcxq8ORVX7ygcwKPur2FCRzAaMdIXm1DpC6f7iKu3lA5gSTkLVx/BwuJsuoqrtsto5i2odIRtQ6Qum+4Grt5w/zdqS7Y/q0/hGcReOpyjkDmbah0he7UdpC6VOx1Vu9hz4nzJLtjirT+GlqfE+ZOQObNqO0hG03cC6Q72lW73PtInzJB2MquzQnjVEf8Sp5saOctpv4OVG0n6ByrovvYVf5uJ7R/akd66gaIvtD2JzY0c8bSfo6QgUF+jpC6FOxbQP8AlHr9oR3rKDpjc8fKnNjRzztF/k9IRtF/k9IXQbtiuh5nxh6zT/ik96miedj85nyKebI0c/7RieT0jtWjyFgOZSt0JTY5owxuPUCvrveqovnY/E5k/cUyrNjiiQYjYgdGeWzk17mSvBE9ywHAnOod7JNohCFQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQFXlN/R0n/AMeN/wDNy5krE3rpjKqe0qVITO140gMSfo3YLmWsYbgZOa4awR1qUBqiYrrKHgNQ6lyhQIL3GTWuceAE9S6vh4DUOpGBxCEKACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACFHplIEOG95wY1zzqaCfgsZFyrjWnBrocgS2bRMXesUBu0LB90NIN4dyMB+BTgrWknxonFDPwYp0DcIWJFKpJx2x7OIOpq9tUgnCkc2IOuSaBtULFbWjnxIp13e84JP1bHP3DzrdD+L00DZuitGLgOMJs02GMYjOcO1ZAVTHl/Tu1F8P50sVNSPNDje34TUA1LqxhD7xnOCaNcQB943imeoLPfUVJ8iHxvPwYg5PUg5oUvTf1WEBduygo4+85Gu7Ew/KmjjxnHUx3xVV3MRzi6GNRcf8Qkdx8U4xmDUxzv8gp6B5XuWVHdBiQwHkvY5l7ZDdAg5+FfKoxgzxdyFfTI2x65/hUlo1Qj8XqC/Ypn+L/8AT/3QGHocOESJWpcYX2Sh5UwXgXPBkPFmOtZqjbGVjClz1wv+6tqNklEZhHYRww3A++nQL1ldwTncPVd2JwVtB8v8rh8FU/UUUeOw8Th0Xrw1LG/4+c75E6Bcis4XnG8d3Wlinwj94znDtVAalj6IfPd8iQamj+QzifPraEBpW0lhwe06iE4Hg4EcqybqojeanwBzPiU39UxvMHidD+ZNA2aFjDV0cYQnjU5nwekuo9JHixRqJPUU0DaoWJc6ktMvt+IPI5ZSSdt0sGX2/s3npsyTQNwhYhtaUoZ4nHDPxaltrykeVytHYmgbRCx8HKN8xacwgXm68gXkCRxkLlsFABCEIAQhCAEIQgP/2Q=='
          rating = {5}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
