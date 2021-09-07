import { buildSchema } from "type-graphql";
import Tweet from "./Tweet";
import TweetControler from '../controllers/TweetControler';

const schema = async () => buildSchema({ resolvers: [Tweet, TweetControler] });

export default schema;
