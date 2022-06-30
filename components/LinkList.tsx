import React from 'react';
import Link from './Link';

const LinkList = ({ linksToRender }: any) => {
  //The following line is commented and left in the code for reference purpose.
  // const { data, loading } = useQuery(FEED_QUERY);
    return (
      <div>
        {linksToRender && (
                <>
            {linksToRender.feed.links.map((link: any) => (
                        <Link key={link.id} link={link} />
                    ))}
                </>
            )}
        </div>
    );
};

export default LinkList;