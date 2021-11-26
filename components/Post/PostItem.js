import Image from "next/image"
import Link from "next/link"

export function PostItem({ title, id }) {
    return (
        <div className="col d-flex">
            <div className="card w-100">
                <Image 
                    src="/images/kot.jpg" 
                    className="card-img-top" 
                    alt="Kot" 
                    width="100"
                    height="100"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title mb-5">{title}</h5>
                    <Link href={`/post/${id}`}>
                        <a className="btn btn-primary">Read more...</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}